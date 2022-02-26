/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-26 21:13:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-14 23:15:08
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
     */
    async index() {
        let { ctx, service, helper, config } = this;
        let query = ctx.query;
        let index = parseInt(query.index) || 1,
            pagesize = parseInt(query.pagesize) || config.G.pagesize;
        let result = await service.content.getContents({ index, pagesize });
        ctx.helper.success({ ctx, data: { index: index, data: result } });
    }

    async show() {
        let { ctx, service, helper, config } = this;
        let { id } = ctx.params;
        if (!id) {
            ctx.helper.error({ ctx, type: "PARAM_ERROR" });
        }
        let archive = await service.content.findOne(id);

        ctx.helper.success({ ctx, data: archive });
    }
}

module.exports = PostController;