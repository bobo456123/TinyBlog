module.exports = (app) => {
    return async function init(ctx, next) {
        //模板调用,{{site.***}}
        // app.locals.site.page = {
        //     index: 1,
        //     pagesize: 5,
        //     total: 10
        // };

        await next();
    };

};