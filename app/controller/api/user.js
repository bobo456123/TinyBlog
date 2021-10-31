/*
 * @Descripttion: 用户操作
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-15 18:38:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-31 16:31:10
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
     * @summary 获取用户信息By username
     * @description 
     * @router get /api/user/getUserByUsername
     * @request body getUserByUsername *body（DTO）
     * @response 200 baseResponse 创建成功（DTO）
     * @apikey
     */
    async getUserByUsername() {
        let { ctx, service, helper, config } = this;
        // 校验参数

        let username = ctx.query.username || "";
        if (!username) {
            return ctx.throw(404, "用户名不能为空");
        }
        const user = await service.user.getUserByName(username);
        if (!user) {
            return ctx.throw(404, "用户不存在");
        }
        ctx.helper.success({ ctx, res: user });
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
     * @summary 新增用户
     * @description 
     * @router post /api/user
     * @request body addUser *body（DTO）
     * @response 200 baseResponse 创建成功（DTO）
     * @apikey
     */
    async create() {
        const { ctx, service } = this
        // 校验参数
        ctx.validate(ctx.rule.addUser);
        // 组装参数
        const payload = ctx.request.body || {};

        // 调用 Service 进行业务处理
        const res = await service.user.addUser(payload)
        // 设置响应内容和响应状态码
        ctx.helper.success({ ctx, res })
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
        const result = await service.user.getUserById(uid).catch((err) => {
            ctx.throw(404, err);
        });;
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