const { Service } = require('egg');
const { Op } = require("sequelize");

class MetaService extends Service {
    async getAllCategory(level = 0) {
        const { ctx, service } = this;

        const query = {
            attributes: ["mid", "name", "parent"],
            where: {
                type: "category"
            },
            order: [
                ["order", "asc"]
            ]
        };

        let allCategory = await ctx.model.Meta.findAll(query);
        let categorys = this.ctx.helper.getListByParent(allCategory, 0, "mid");

        return categorys;
    }

    /**
     * 获取头部导航列表
     * @returns 
     */
    getNavigator() {
        const { ctx } = this;
        const query = {
            attributes: ["title", "cid"],
            where: {
                type: "page"
            },
            order: [
                ["cid", "asc"]
            ]
        };
        return ctx.model.Content.findAll(query);
    }
}

module.exports = MetaService