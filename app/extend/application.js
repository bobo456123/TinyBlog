/*
Application
app 对象指的是 Koa 的全局应用对象，全局只有一个，在应用启动时被创建。

访问方式
ctx.app

Controller，Middleware，Helper，Service 中都可以通过 this.app 访问到 Application 对象，例如 this.app.config 访问配置对象。

在 app.js 中 app 对象会作为第一个参数注入到入口函数中

// app.js
module.exports = app => {
  // 使用 app 对象
};

例如，我们要增加一个 app.foo() 方法：
// app/extend/application.js
module.exports = {
  foo(param) {
    // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
  },
};
*/

module.exports = {
  foo(param) {
    // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
    return "foo";
  },
  siteInfo: {}
};