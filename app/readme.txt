1.模板中：框架会自动注入 ctx, request, helper 方便使用。
2.中间件：入的变量ctx, next,app,options(default.config.js中配置)
3.控制器：ctx、app、service
4.ctx：helper
5.error_handle.js:错误捕获，统一处理
6.contract：自动化验证模型
7.model配置了orm模型和模型间的关联关系,这些关系通常成对使用,以便 Sequelize 更好地使用；查看model/content.js中，content和user的关系；
8.数据库中字段不要使用name、email这类近似关键字的字段名称，会导致sequlize在新增数据时，进行唯一性判断；