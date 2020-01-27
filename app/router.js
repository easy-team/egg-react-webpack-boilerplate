
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/list', controller.home.index.list);
  router.get('/intro', controller.intro.intro.index);
  router.get('/detail/:id', controller.home.index.detail);
  router.get('/csr', controller.home.index.csr);
  router.get('/node', controller.home.index.node);
  router.get('/test/async', controller.test.test.asyncRender);
  router.get('/stateless', controller.home.index.stateless);
  router.get('/*', controller.home.index.ssr);
};
