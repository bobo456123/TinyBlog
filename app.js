/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-05-02 15:20:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-20 00:03:45
 */
class AppBootHook {
    constructor(app) {
        this.app = app;

        // const errorHandle = require("@/middleware/error_handler.js");

        // console.log("--------");
        // console.log(errorHandle);
        // this.app.use(errorHandle({}, this.app)
        this.app.use(async function (ctx, next) {
            try {
                await next();
            } catch (err) {
                // console.log("error...");
                app.emit("error", err, this);
                //应答
                const status = err.status || 500;
                const error = status === 500 && app.config.env === "prod" ?
                    "Interval server error" :
                    err.message;

                ctx.body = {
                    code: status,
                    data: {},
                    message: error
                };

                if (status === 422) {
                    ctx.body.detail = err.errors;
                }
                ctx.status = 200;
            }
        });
    }

    configWillLoad() {
        // Ready to call configDidLoad,
        // Config, plugin files are referred,
        // this is the last chance to modify the config.

        //创建nunjuck模板引擎过滤器
        const filters = require("./app/extend/helper.js");
        const enableKeys = ["date", "dateFormat", "cutString"];
        for (let key in filters) {
            enableKeys.indexOf(key) >= 0 && this.app.nunjucks.addFilter(key, filters[key]);
        }
    }

    configDidLoad() {
        // Config, plugin files have been loaded.
    }

    async didLoad() {
        // All files have loaded, start plugin here.
    }

    async willReady() {
        // All plugins have started, can do some thing before app ready

        //同步数据库表
        // await this.app.model.sync({ force: true });//开发环境使用：强制删除后，再新增。
        await this.app.model.sync({});
    }

    async didReady() {
        // Worker is ready, can do some things
        // don't need to block the app boot.
    }

    async serverDidReady() {
        // Server is listening.
    }

    async beforeClose() {
        // Do some thing before app close.
    }
}

module.exports = AppBootHook;