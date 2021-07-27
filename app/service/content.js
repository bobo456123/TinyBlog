const { Service } = require('egg');
const { Op } = require("sequelize");

class ContentService extends Service {
    async getEarliestOne() {
        const { ctx, service } = this;
        const query = {
            attributes: ["cid", "title", "created"],
            order: [["created", "desc"]],
            where: {
                type: "post"
            }
        };
        return ctx.model.Content.findOne(query);
    }
    /**
     * 
     * @param {分页获取文章} param 
     * @returns 
     */
    async getContents(param) {
        const { ctx, app, service, config } = this;
        const { index = 1, pagesize = config.G.pagesize, month = null, mid = null } = param;
        var _where = {
            status: "publish",
            type: "post"
        };

        //筛选月份
        if (month && month.length == 6) {
            _where.created = {
                [Op.gte]: new Date(month.slice(0, 4) + "-" + month.slice(4, 6) + "-01")
            }
        }

        //筛选分类
        let _where_meta = null;
        if (mid) {
            let mids = await service.meta.getChilrenMids(mid);
            console.log("-----");
            console.log(mids);
            _where_meta = {
                mid: {
                    [Op.in]: mids
                }
            };
        }

        //如果登录状态，并且登录人和 authorId 相等
        //等同于 where status="public" or (authodId=1 and status="private")
        // _where = {
        //     [Op.or]: [
        //         {
        //             status: "publish"
        //         },
        //         {
        //             [Op.and]: [{ authorId: 1 }, { status: "private" }]
        //         }
        //     ]
        // };

        const query = {
            limit: pagesize,
            offset: (index - 1) * pagesize,
            attributes: ['cid', 'title', "modified", "created", "text"],
            include: [
                {
                    model: ctx.model.User,
                    as: 'user',
                    attributes: ['screenName']
                },
                {
                    model: ctx.model.Meta,
                    as: 'meta',
                    attributes: ['name', 'mid'],
                    where: _where_meta
                }
            ],
            // raw: true,
            where: _where,
            order: [
                ["created", "desc"]
            ]
        };

        return ctx.model.Content.findAll(query)
    }

    /**
     * 
     * @param {找到最新的几篇文章} limit 
     * @returns 
     */
    async getLastestContents(limit = 5) {
        const { ctx, service } = this;
        var _where = {
            status: "publish",
            type: "post"
        };

        const query = {
            limit: limit,
            offset: 0,
            attributes: ['cid', 'title'],
            where: _where,
            order: [
                ["created", "desc"]
            ]
        };

        return ctx.model.Content.findAll(query)
    }

    /**
     * 
     * @param {根据id获取文章} id 
     * @returns 
     */
    async findOne(id) {
        const { ctx, service } = this;
        const query = {
            attributes: ['cid', 'title', "modified", "created", "text", "authorId"],
            include: [
                {
                    model: ctx.model.User,
                    as: 'user',
                    attributes: ['screenName']
                },
                {
                    model: ctx.model.Meta,
                    as: 'meta',
                    attributes: ["mid", "name", "type"]
                }
            ],
            raw: false,
            where: {
                cid: id
            }
        };
        return ctx.model.Content.findOne(query);
    }

    /**
     * 
     * @param {找到指定id前后的文章}} id 
     * @param {*} type 
     * @returns 
     */
    async findSilbingOne(id, type = "next") {
        const { ctx, service } = this;
        let _where = {
            next: { [Op.gt]: id },
            prev: { [Op.lt]: id },
            type: "post"
        };
        if (typeof _where[type] === "undefined") {
            throw "type:非法参数";
        }
        const query = {
            attributes: ['cid', 'title'],
            order: [["created", "desc"]],
            where: {
                cid: _where[type]
            }
        };
        return ctx.model.Content.findOne(query);
    }
}

module.exports = ContentService