/*
 * @Descripttion: 路由
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-05-02 14:24:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-31 15:18:38
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

  //用户
  router.delete(`/${version}/api/user/deleteUsers`, controller.api.user.deleteUsers);
  router.resources(`/${version}/api/user`, controller.api.user);
  router.get(`/${version}/api/user/getUserByUsername`, controller.api.user.getUserByUsername);

  //帖子
  router.resources(`/${version}/api/post`, controller.api.post);
  router.delete(`/${version}/api/post/deletePosts`, controller.api.post.deletePosts);

};
