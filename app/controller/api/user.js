/*
 * @Descripttion: 用户操作
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-15 18:38:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-25 22:28:13
 */
const { Controller } = require("egg");

/**
 * @Controller 用户管理
 */
class UserController extends Controller {
    constructor(ctx) {
        super(ctx);
    }

    /**
     * @summary 用户列表
     * @description 
     * @router get /api/user
     * @response 200 baseResponse 创建成功（DTO）
     * @apikey
     */
    async index() {
        let { ctx, service, helper, config } = this;
        let query = ctx.query;
        let index = parseInt(query.index) || 1,
            pagesize = parseInt(query.pagesize) || config.G.pagesize;
        let result = await service.user.getUsers({ index, pagesize });
        ctx.helper.success({ ctx, res: { index: index, data: result } });
    }

    /**
     * @summary 登录
     * @description 账号、密码登录
     * @router post /auth/login
     * @request body loginRequest *body（DTO）
     * @response 200 baseResponse 创建成功（DTO）
     * 
     */
    async login() {
        const { ctx, service } = this
        // 校验参数
        ctx.validate(ctx.rule.loginRequest);
        // 组装参数
        const payload = ctx.request.body || {}
        // 调用 Service 进行业务处理
        const res = await service.userAccess.login(payload)
        // 设置响应内容和响应状态码
        ctx.helper.success({ ctx, res })
    }

    /**
     * @summary 获取当前登录用户信息
     * @description 
     * @router get /api/getCurrentInfo
     * @response 200 baseResponse 创建成功
     */
    async getCurrentInfo() {
        const { ctx, service } = this;
        console.log(this.app.foo());
        const uid = ctx.state.user.data.uid;
        const result = await service.user.getUserById(uid);
        ctx.helper.success({ ctx, res: result })
    }

    /**
     * @summary 用户登出
     * @description 用户登出
     * @router post /auth/logout
     * @request body loginRequest *body
     * @response 200 baseResponse 创建成功
     */
    async logout() {
        const { ctx, service } = this
        // 调用 Service 进行业务处理
        await service.userAccess.logout()
        // 设置响应内容和响应状态码
        ctx.helper.success({ ctx })
    }


}

module.exports = UserController;