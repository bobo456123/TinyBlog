/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-16 00:02:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-16 00:17:18
 */
const { Service } = require("egg");
const { OpF } = require("sequelize");

class UserService extends Service {
    constructor(ctx) {
        super(ctx);
    }

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