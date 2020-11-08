
'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.redirect('/', '/html', 302);
  router.get('/html/simple', controller.html.index.simple);
  router.get('/html(/.*)?', controller.html.index.spa);
};
