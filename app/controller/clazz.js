const { Controller } = require("egg");

class ClazzController extends Controller {
    async index() {
        this.ctx.body = this.app.model.Clazz.findAll();
    }

    async create() {
        let { ctx } = this;
        await this.app.model.Clazz.create({ name: ctx.request.body.name });
        this.ctx.body = "新增数据";
    }

    async destroy() {
        let { ctx } = this;
        await this.app.model.Clazz.destroy(
            {
                where: { id: ctx.params.id }
            }
        );
        this.ctx.body = "删除数据";
    }

    async update() {
        let { ctx } = this;
        await this.app.model.Clazz.update(
            { name: ctx.request.body.name },
            {
                where: {
                    id: ctx.params.id
                }
            });
        this.ctx.body = "修改数据";
    }
}

module.exports = ClazzController;