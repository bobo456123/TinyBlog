const { Controller } = require("egg");

class StudentController extends Controller {
    async index() {
        this.ctx.body = this.app.model.Student.findAll();
    }

    async create() {
        let { ctx } = this;
        let { name, achievement, clazzid } = ctx.request.body;
        await this.app.model.Student.create({
            name: name,
            achievement: achievement,
            clazz_id: clazzid
        });
        ctx.body = "新增数据";
    }

    async destroy() {
        let { ctx } = this;
        await this.app.model.Student.destroy(
            {
                where: { id: ctx.params.id }
            }
        );
        this.ctx.body = "删除数据";
    }

    async update() {
        let { ctx } = this;
        // console.log(ctx.params.id, ctx.request.body.name);
        await this.app.model.Student.update(
            { name: ctx.request.body.name },
            {
                where: {
                    id: ctx.params.id
                }
            });
        this.ctx.body = "修改数据";
    }
}

module.exports = StudentController;