/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-05-11 23:38:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-21 22:01:30
 */
module.exports = (options, app) => {
    return async function init(ctx, next) {
        //模板调用,{{site.***}}
        app.locals.site = await ctx.service.option.getOption();

        //获取侧边栏信息
        app.locals.site.sidebartInfo = await getSideBarInfo.call({ ctx, service: ctx.service });

        //导航列表
        app.locals.site.navigator = await ctx.service.meta.getNavigator();

        await next();
    };

    /**
     * 获取侧边栏信息
     * @returns 
     */
    async function getSideBarInfo() {
        const { ctx, service } = this;
        //最新文章
        let lastestArchives = await service.content.getLastestContents(5);

        //分类
        let categorys = await service.meta.getAllCategory();

        //归档列表
        let earliestOneContent = await service.content.getEarliestOne();
        let earliestMonth = earliestOneContent && ctx.helper.archiveMonth(ctx.helper.date(earliestOneContent.created)) || [];

        //获取最新评论
        let lareastComments = await ctx.service.comment.getLastestComments();

        return { lastestArchives, categorys, earliestMonth, lareastComments };
    }
};