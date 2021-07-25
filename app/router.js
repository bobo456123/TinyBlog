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

  router.get('/archive/:cid', controller.archive.show);
  router.post('/comment/:cid', controller.comment.create);

  router.resources('/clazz', controller.clazz);
  router.resources('/student', controller.student);
};
