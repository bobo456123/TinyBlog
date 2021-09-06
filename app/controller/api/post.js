/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-26 21:13:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-06 20:53:08
 */

const { Controller } = require("egg");

/**
 * @Controller 帖子管理
 */
class PostController extends Controller {
    constructor(ctx) {
        super(ctx);
    }

    /**
     * @summary 帖子列表
     * @description 
     * @router get /api/post
     * @response 200 baseResponse 创建成功（DTO）
     * @apikey
     * 
     */
    async index() {
        let { ctx, service, helper, config } = this;
        let query = ctx.query;
        let index = query.index || 1,
            pagesize = query.pagesize || config.G.pagesize;
        pagesize = parseInt(pagesize);
        let result = await service.content.getContents({ index, pagesize });
        ctx.helper.success({ ctx, res: { index: index, data: result } });
    }
}

module.exports = PostController;