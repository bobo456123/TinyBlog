const { Service } = require('egg');
const { Op } = require("sequelize");

class OptionService extends Service {
    async getOption() {
        const { ctx, service } = this;
        const query = {
            where: {
                name: {
                    [Op.in]: ["charset", "contentType", "lang", "timezone", "theme", "gzip", "generator", "title", "description", "keywords", "siteUrl", "attachmentTypes", "allowXmlRpc"]
                }
            }
        };
        let r = await ctx.model.Option.findAll(query);
        var info = {};
        r.map(item => {
            info[item.name] = item.value;
        });
        return info;

    }
}

module.exports = OptionService