module.exports = (options, app) => {
    return async function init(ctx, next) {
        //模板调用,{{ctx.site.***}}
        ctx.site=await ctx.service.option.getOption();
        await next();
    };
};