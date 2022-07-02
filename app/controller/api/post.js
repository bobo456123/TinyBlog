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
        ctx.helper.success({ ctx, data: { index: index, list: result } });
    }

    /**
     * @summary 显示帖子信息
     * @description 
     * @router GET /api/post/{id}
     * @request path number id 帖子id
     * @response 200 baseResponse 创建成功（DTO）
     * @apikey
     */
    async show() {
        let { ctx, service, helper, config } = this;
        let { id } = ctx.params;
        if (!id) {
            ctx.helper.error({ ctx, type: "PARAM_ERROR" });
        }
        let archive = await service.content.findOne(id);

        ctx.helper.success({ ctx, data: archive });
    }

    /**
    * @summary 批量删除帖子
    * @description 
    * @router DELETE /api/post/deletePosts
    * @request body deletePosts *body（DTO）
    * @response 200 baseResponse 创建成功（DTO）
    * @apikey
    */
    async deletePosts() {
        const { ctx, service } = this

        // 校验参数
        ctx.validate(ctx.rule.deletePosts);

        let ids = ctx.request.body.ids;
        // if (!ids || !ids.length) {
        //     return ctx.helper.error({ ctx, type: "PARAM_ERROR" })
        // }
        // 调用 Service 进行业务处理
        const data = await service.content.deletePosts(ids);
        // 设置响应内容和响应状态码
        ctx.helper.success({ ctx, data })
    }

    /**
     * @summary 新增帖子
     * @description 
     * @router post /api/post
     * @request body addPost *body（DTO）
     * @response 200 baseResponse 创建成功（DTO）
     * @apikey
     */
    async create() {
        const { ctx, service } = this
        // 校验参数
        ctx.validate(ctx.rule.addPost);
        // 组装参数
        const payload = ctx.request.body || {};

        // 调用 Service 进行业务处理
        const data = await service.content.addPost(payload)
        // 设置响应内容和响应状态码
        ctx.helper.success({ ctx, data })
    }
}

module.exports = PostController;