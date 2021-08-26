/*
 * @Descripttion: 
 * @version: 
 * @Author: IT飞牛
 * @Date: 2021-08-15 22:07:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-25 21:53:50
 */
module.exports = (option, app) => {
    return async function (ctx, next) {
        try {
            // console.log("MMMM...");
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
                code: status == 401 ? -1 : status,
                data: {},
                message: error
            };

            if (status === 422) {
                ctx.body.detail = err.errors;
            }
            ctx.status = 200;
        }
    }
}