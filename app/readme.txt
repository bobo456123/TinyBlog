1.模板中：框架会自动注入 ctx, request, helper 方便使用。
2.中间件：入的变量ctx, next,app,options(default.config.js中配置)
3.控制器：ctx、app、service
4.ctx：helper
5.error_handle.js:错误捕获，统一处理
6.contract：自动化验证模型
7.