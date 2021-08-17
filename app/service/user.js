/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-16 00:02:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-17 21:37:08
 */
const { Service } = require("egg");
const { OpF } = require("sequelize");

class UserService extends Service {
    constructor(ctx) {
        super(ctx);
    }
    /**
     * @name: 获取用户列表
     * @msg: 
     * @param {*}
     * @return {*}
     */
    async getUsers() {
        const { ctx, service } = this;
        const param = {
            attributes: ["uid", "name", "password"]
        };
        let result = await ctx.model.User.findAll(param)
        return result;
    }

    /**
     * @name: 根据用户名获取用户信息
     * @msg: 
     * @param {string} name 用户名
     * @return {object} 
     */
    async getUserByName(name) {
        const { ctx, service } = this;
        const param = {
            attributes: ["uid", "name", "password"],
            where: {
                name: name
            }
        };
        let result = await ctx.model.User.findOne(param)
        return result;
    }

}

module.exports = UserService;