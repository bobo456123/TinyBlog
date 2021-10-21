/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-05-13 22:50:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-21 23:24:34
 */
const { Service } = require('egg');
const { Op } = require("sequelize");

class CommentService extends Service {

    async addComment(param) {
        const { ctx, service } = this;
        const comment = await ctx.model.Comment.create(param).catch((err) => {
            ctx.throw(500,err);
        });
        return comment.coid;
    }

    /**
     * 
     * @param {number} limit 找到最新的几篇文章
     * @returns 
     */
    async getLastestComments(limit = 5) {
        const { ctx, service } = this;
        var _where = {
            status: "approved",
            type: "comment"
        };

        const query = {
            limit: limit,
            offset: 0,
            attributes: ['cid', 'coid', 'author', 'authorId', 'text', "created"],
            where: _where,
            order: [
                ["created", "desc"]
            ]
        };

        return ctx.model.Comment.findAll(query)
    }
    /**
     * 根据文章cid，获取当前文章下的所有评论（树形结构）
     * @param {*} cid 
     * @returns 
     */
    async getCommentByCid(cid) {
        const { ctx, service } = this;
        const query = {
            attributes: ["coid", "author", "authorId", "created", "url", "text", "status", "parent"],
            order: [["created", "desc"]],
            where: {
                type: "comment",
                status: "approved",
                cid: cid
            }
        };
        let list = await ctx.model.Comment.findAll(query);
        let result = {
            total: list.length,
            data: this.ctx.helper.getListByParent(list, 0, "coid")
        };
        return result;
    }
}

module.exports = CommentService