/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-16 00:02:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-31 11:44:38
 */
const { Service } = require("egg");
const { Op } = require("sequelize");

class UserService extends Service {
    constructor(ctx) {
        super(ctx);
    }
    /**
     * @name: 新增用户
     * @msg: 
     * @param {object}
     * @return {number}
     */
    async addUser(param) {
        const { ctx, app, service, config } = this;
        param.password = await ctx.genHash(param.password);
        const user = await ctx.model.User.create(param).catch((err) => {
            ctx.throw(404, err);
        });

        return user.uid;
    }

    /**
     * @name: 删除用户
     * @msg: 
     * @param {string}
     * @return {boolean}
     */
    async destroyUsers(ids) {
        const { ctx, app, service, config } = this;

        const result = await ctx.model.User.destroy({
            where: {
                uid: {
                    [Op.in]: ids
                }
            }
        }).catch((err) => {
            ctx.throw(404, err);
        });

        return result;
    }

    /**
     * @name: 更新用户
     * @msg: 
     * @param {string}
     * @return {boolean}
     */
    async update(id, param) {
        const { ctx, app, service, config } = this;

        if (!!param.password.trim()) {
            param.password = await ctx.genHash(param.password)
        } else {
            delete (param.password);
        }
        const result = await ctx.model.User.update(param, {
            where: {
                uid: id
            }
        }).catch((err) => {
            ctx.throw(404, err);
        });

        return result;
    }

    /**
     * @name: 获取用户列表
     * @msg: 
     * @param {object}
     * @return {*}
     */
    async getUsers(param) {
        const { ctx, app, service, config } = this;
        const { index = 1, pagesize = config.G.pagesize, keyword = "", order = ["uid", "desc"] } = param;
        const option = {
            limit: pagesize,
            offset: (index - 1) * pagesize,
            attributes: ["uid", "username", "email", "url", "screenName", "group"],
            order: [order],
            include: [
                {
                    model: ctx.model.Content,
                    attributes: ["cid"],
                    as: 'content',
                }
            ],
        };
        if (!!keyword) {
            option.where = {
                username: {
                    [Op.like]: keyword
                }
            };
        }
        let result = await ctx.model.User.findAll(option)
        return result;
    }

    /**
     * @username: 根据用户名获取用户信息
     * @msg: 
     * @param {string} username 用户名
     * @return {object} 
     */
    async getUserByName(username) {
        const { ctx, service } = this;
        const param = {
            attributes: ["uid", "username", "password", "email", "url", "screenName", "created", "activated", "group"],
            where: {
                username: username
            }
        };
        let result = await ctx.model.User.findOne(param)
        return result;
    }

    /**
     * @username: 根据用户id获取用户信息
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
            attributes: ["uid", "username", "email", "url", "screenName", "created", "activated", "group"],
            where: {
                uid: uid
            }
        };
        let result = await ctx.model.User.findOne(param).catch((err) => {
            ctx.throw(404, err);
        });
        return result;
    }

}

module.exports = UserService;