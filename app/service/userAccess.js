/*
 * @Descripttion: 登录、退出
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-16 21:24:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-21 22:45:52
 */
const Service = require('egg').Service
class UserAccessService extends Service {
    async login(payload) {
        const { ctx, service } = this
        const user = await service.user.getUserByName(payload.username);
        if (!user) {
            ctx.throw(404, 'user not found')
        }
        let verifyPsw = await ctx.compare(payload.password, user.password)
        if (!verifyPsw) {
            ctx.throw(404, 'user password is error')
        }
        // 生成Token令牌
        return { token: await service.actionToken.apply(user.uid) }
    }
    async logout() {
    }
    async current() {
        const { ctx, service } = this
        // ctx.state.user 可以提取到JWT编码的data
        const _id = ctx.state.user.data._id
        const user = await service.user.find(_id)
        if (!user) {
            ctx.throw(404, 'user is not found')
        }
        user.password = 'How old are you?'
        return user
    }
}
module.exports = UserAccessService