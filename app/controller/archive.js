'use strict';

const Controller = require('egg').Controller;

class ArchiveController extends Controller {

  /**
   * 首页
   */
  async index() {
    const { ctx, service, config, app } = this;
    const { p = 1 } = ctx.query;
    let archives = await service.content.getContents({ index: p || 1 });

    //分页数据
    app.locals.site.page = {
      index: p,
      pagesize: config.G.pagesize,
      isFirst: p <= 1,
      path: ctx.path,
      isLast: archives.length < config.G.pagesize
    };

    await ctx.render('list', { list: archives });
  }

  /**
   * 月归档页
   */
  async month() {
    const { ctx, service, config, app } = this;
    const { p = 1 } = ctx.query;
    let archives = await service.content.getContents({ index: p || 1, month: ctx.params.month });

    //分页数据
    app.locals.site.page = {
      index: p,
      pagesize: config.G.pagesize,
      isFirst: p <= 1,
      path: ctx.path,
      isLast: archives.length < config.G.pagesize
    };

    await ctx.render('list', { list: archives });
  }

  /**
   * 分类归档页
   */
  async category() {
    const { ctx, service, config, app } = this;
    const { p = 1 } = ctx.query;
    let archives = await service.content.getContents({ index: p || 1, mid: ctx.params.mid });

    //分页数据
    app.locals.site.page = {
      index: p,
      pagesize: config.G.pagesize,
      isFirst: p <= 1,
      path: ctx.path,
      isLast: archives.length < config.G.pagesize
    };

    //获取分类路径
    let paths = await service.meta.getCategoryPathArr(ctx.params.mid);

    await ctx.render('list', { list: archives, paths });
  }

  /**
   * 搜索页面
   */
  async search() {
    const { ctx, service, config, app } = this;
    const { p = 1 } = ctx.query;
    let archives = await service.content.getContents({ index: p || 1, keyword: ctx.params.keyword });

    //分页数据
    app.locals.site.page = {
      index: p,
      pagesize: config.G.pagesize,
      isFirst: p <= 1,
      path: ctx.path,
      isLast: archives.length < config.G.pagesize
    };

    await ctx.render('list', { list: archives });
  }

  /**
   * 帖子详情页
   */
  async show() {
    const { ctx, service, app, config } = this;
    let { cid } = ctx.params;
    let archive = await service.content.findOne(cid);
    //获取标签和分类

    var type = archive.meta.filter(meta => meta.type === "category");
    var tags = archive.meta.filter(meta => meta.type === "tag");
    archive.type = type[0];
    archive.tags = tags;

    //获取上一页、下一页
    archive.prev = await service.content.findSilbingOne(cid, "prev");
    archive.next = await service.content.findSilbingOne(cid, "next");

    //获取评论
    let comments = await ctx.service.comment.getCommentByCid(cid);

    await ctx.render("archive", { archive, comments });
  }
}

module.exports = ArchiveController;
