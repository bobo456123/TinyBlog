const { Service } = require('egg');
const { Op } = require("sequelize");

class CommentService extends Service {

    async addComment(param) {
        const { ctx, service } = this;
        const comment = await ctx.model.Comment.create(param).catch(() => {
            return 0;
        });
        return comment.coid;
    }

    /**
     * 
     * @param {找到最新的几篇文章} limit 
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
            attributes: ['cid', 'coid', 'author', 'authorId', 'text'],
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