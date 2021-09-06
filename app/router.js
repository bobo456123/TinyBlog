/*
 * @Descripttion: 路由
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-05-02 14:24:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-06 21:12:25
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
  let version = app.config.G.version;
  router.post(`/${version}/auth/login`, controller.api.user.login);
  router.post(`/${version}/auth/logout`, controller.api.user.logout);

  router.get(`/${version}/api/getCurrentInfo`, controller.api.user.getCurrentInfo);
  router.get(`/${version}/api/comment/getLastestComments`, controller.api.comment.getLastestComments);

  router.resources(`/${version}/api/user`, controller.api.user);
  router.resources(`/${version}/api/post`, controller.api.post);


};
