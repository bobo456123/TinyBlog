const { Service } = require('egg');
const { Op } = require("sequelize");

class MetaService extends Service {
    constructor(ctx) {
        super(ctx);
        //完整的分类树结构缓存（考虑redis）
        // this.allCategory = null;
    }

    //获取某个分类节点下的所有后代节点
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
     * 获取某个父mid下的所有子mid（含自身），返回一个数组
     * @param {number} parentid 
     */
    async getChilrenMids(parentid = 0) {
        const { ctx, app, service, config } = this;
        let data = [];
        if (app.locals.site.sidebartInfo.categorys.length) {
            data = app.locals.site.sidebartInfo.categorys;
        } else {
            data = await getAllCategory();
        }
        let mids = this.appendChildMid(this.getNodeByMid(parentid, data));
        return mids;
    }

    /**
     * 根据mid搜索获取node节点数据
     * @param {number} mid 
     * @param {Array} map 
     */
    getNodeByMid(mid = 0, map) {
        let self = this;
        for (let index = 0; index < map.length; index++) {
            const element = map[index];
            if (element.mid == mid) {
                return element;
            } else {
                let r = self.getNodeByMid(mid, element.children);
                if (!!r) {
                    return r;
                }
            }
        }
    }

    /**
     * 递归遍历追加子mid
     * @param {object} node 
     */
    appendChildMid(node, field = "mid") {
        let self = this;
        let mids = [node[field]];
        if (node.children && node.children.length) {
            node.children.forEach(function (meta, i, arr) {
                mids.push(...self.appendChildMid(meta));
            });
        }
        return mids;
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