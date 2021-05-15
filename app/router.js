'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.archive.index);
  router.get('/archive/:id', controller.archive.show);

  router.resources('/clazz', controller.clazz);
  router.resources('/student', controller.student);
};
