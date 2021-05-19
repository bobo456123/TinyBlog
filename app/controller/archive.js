'use strict';

const Controller = require('egg').Controller;

class ArchiveController extends Controller {

  /**
   * 首页
   */
  async index() {
    const { ctx, service, config, app } = this;
    const { index } = ctx.params;
    let archives = await service.content.getContents({ index: index || 1 });

    app.locals.site.page = {
      index,
      pagesize: config.G.pagesize,
      isFirst: index <= 1,
      isLast: archives.length < config.G.pagesize
    };

    await ctx.render('list', { list: archives });
  }

  /**
   * 月归档页
   */
  async month() {
    const { ctx, service, config, app } = this;
    const { index } = ctx.params;
    let archives = await service.content.getContents({ index: index || 1, month: ctx.params.month });

    app.locals.site.page = {
      index,
      pagesize: config.G.pagesize,
      isFirst: index == 1,
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
