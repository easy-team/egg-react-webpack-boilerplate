
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/blog/list', controller.blog.index.list);
  router.get('/api/blog/:id', controller.blog.index.detail);
  router.get('/intro', controller.intro.intro.index);
  router.get('/csr', controller.blog.index.csr);
  router.get('/node', controller.blog.index.node);
  router.get('/example/stateless', controller.example.index.statelessRender);
  router.get('/example/hook', controller.example.index.reactHook);
  router.get('/example/async', controller.example.index.asyncComponentRender);
  router.get('/example/context', controller.example.data.contextRender);
  router.get('/example/data/node', controller.example.data.nodeDataRender);
  router.get('/example/data/async', controller.example.data.asyncDataRender);
  router.get('/example/data/api/article', controller.example.data.article);
  router.get('/(.*?)', controller.blog.index.ssr);
};
