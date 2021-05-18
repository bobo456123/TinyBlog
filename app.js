class AppBootHook {
    constructor(app) {
        this.app = app;
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