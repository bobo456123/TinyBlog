/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-26 21:13:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-26 22:13:44
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
     * 
     */
    async index() {
        let { ctx, service, helper } = this;
        let result = await service.content.getLastestContents(9);
        ctx.helper.success({ ctx, res: result });
    }
}

module.exports = PostController;