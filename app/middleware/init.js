module.exports = (options, app) => {
    return async function init(ctx, next) {
        //模板调用,{{site.***}}
        app.locals.site = await ctx.service.option.getOption();

        await next();
    };
};