/*
 * @Descripttion: 路由
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-05-02 14:24:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-21 14:55:53
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const page = require("./middleware/page")(app);

  const { router, controller } = app;

  router.get('/', page, controller.archive.index);
  router.get('/month/:month', controller.archive.month);
  router.get('/category/:mid', controller.archive.category);
  router.get('/search/:keyword', controller.archive.search);

  router.get('/archive/:cid', controller.archive.show);
  router.post('/comment/:cid', controller.comment.create);

  router.resources('/clazz', controller.clazz);
  router.resources('/student', controller.student);

  //api接口
  const apiV1Router = router.namespace('/api/' + app.config.G.version.path)

  router.post('/auth/login', controller.api.user.login);
  router.post('/auth/logout', controller.api.user.logout);

  apiV1Router.resources('/user', controller.api.user);

};
