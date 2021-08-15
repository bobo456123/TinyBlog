const { Controller } = require("egg");

/**
 * @Controller 用户管理
 */
class UserController extends Controller {
    constructor(ctx) {
        super(ctx);
    }

    /**
     * @summary 登录
     * @description 账号、密码登录
     * @router post /api/login
     * @request body loginRequest *body（DTO）
     * @response 200 baseResponse 创建成功（DTO）
     * 
     */
    async login() {
        const { ctx, service } = this;

        //校验代码
        ctx.validate(ctx.rule.loginRequest);

        let user = await service.user.getUserByName(ctx.request.body.name);

        if (!user) {
            ctx.helper.error({ ctx, message: "用户不存在" });
            return;
        }
        
        let password = await ctx.genHash(ctx.request.body.password);
        if (user.password !== password) {
            ctx.helper.error({ ctx,res:password, message: "密码不正确" });
            return;
        }

        ctx.helper.success({ ctx, res: user, message: password });
    }

    /**
     * @summary 创建用户
     * @description 创建用户 记录用户账号、密码
     * @router post /api/user
     * @request body createUserRequest *body（DTO）
     * @response 200 baseResponse 创建成功（DTO）
     * 
     */
    async create() {
        const { ctx } = this;

        //校验代码
        ctx.validate(ctx.rule.createUserRequest);

        // aa();
        ctx.helper.success({ ctx });
    }
}

module.exports = UserController;