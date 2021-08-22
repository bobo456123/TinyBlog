/*
 * @Descripttion: 口令相关操作
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-16 21:24:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-21 22:51:47
 */
const Service = require('egg').Service
class ActionTokenService extends Service {
    async apply(uid) {
        const { ctx } = this
        return ctx.app.jwt.sign({
            data: {
                uid: uid
            },
        }, ctx.app.config.jwt.secret)
    }
}
module.exports = ActionTokenService