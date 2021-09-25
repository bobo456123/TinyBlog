/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-16 00:02:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-25 22:31:12
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
    async getUsers(param) {
        const { ctx, app, service, config } = this;
        const { index = 1, pagesize = config.G.pagesize, keyword = "", order = ["created", "desc"] } = param;
        const option = {
            limit: pagesize,
            offset: (index - 1) * pagesize,
            attributes: ["uid", "name", "mail", "url", "screenName", "group"],
            include: [
                {
                    model: ctx.model.Content,
                    attributes: ["cid"],
                    as: 'content',
                }
            ],

        };
        let result = await ctx.model.User.findAll(option)
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
            attributes: ["uid", "name", "password", "mail", "url", "screenName", "created", "activated", "group"],
            where: {
                name: name
            }
        };
        let result = await ctx.model.User.findOne(param)
        return result;
    }

    /**
     * @name: 根据用户id获取用户信息
     * @msg: 
     * @param {number} uid 
     * @return {object} 
     */
    async getUserById(uid) {
        const { ctx, service } = this;
        if (!uid) {
            return null;
        }
        const param = {
            attributes: ["uid", "name", "mail", "url", "screenName", "created", "activated", "group"],
            where: {
                uid: uid
            }
        };
        let result = await ctx.model.User.findOne(param)
        return result;
    }

}

module.exports = UserService;