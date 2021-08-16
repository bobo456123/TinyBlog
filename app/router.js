/*
 * @Descripttion: 路由
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-05-02 14:24:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-16 23:51:58
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
  router.post('/auth/login', controller.user.login);
  router.post('/auth/logout', controller.user.logout);

};
