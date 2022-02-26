/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-09-06 20:53:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-06 21:13:07
 */
const { Controller } = require("egg");

class CommentController extends Controller {

    /**
     * @summary 最近回复
     * @description 
     * @router get /api/comment/getLastestComments
     * @response 200 baseResponse 获取成功（DTO）
     * @apikey
     * 
     */
    async getLastestComments() {
        let { ctx, service } = this;
        let { limit = 9 } = ctx.query;
        limit = parseInt(limit);
        let result = await service.comment.getLastestComments(limit);
        ctx.helper.success({ ctx, data: result });
    }
}

module.exports = CommentController;