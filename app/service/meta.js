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
        let categorys = this.getCategoryByParent(allCategory, 0);
        return categorys;
    }

    getCategoryByParent(categorys, mid) {
        var self = this;
        return categorys
            .filter(item => {
                return item.parent === mid;
            })
            .map(function (item) {
                item.children = self.getCategoryByParent(categorys, item.mid);
                return item;
            });
    }
}

module.exports = MetaService