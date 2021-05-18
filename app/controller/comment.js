'use strict';

const Controller = require('egg').Controller;

class CommentController extends Controller {

  async create() {
    const { ctx, service } = this;
    let params = ctx.request.body;
    params.cid = ctx.params.cid;
    // params.created = Date.now();
    let flag = await service.comment.addComment(params);

    ctx.response.redirect(`/archive/${params.cid}`);
  }

}

module.exports = CommentController;
