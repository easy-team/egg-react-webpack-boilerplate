
'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.get('/example/stateless', controller.example.index.statelessRender);
  router.get('/example/hook', controller.example.index.reactHook);
  router.get('/example/async', controller.example.index.asyncComponentRender);
  router.get('/example/context', controller.example.data.contextRender);
  router.get('/example/data/node', controller.example.data.nodeDataRender);
  router.get('/example/data/async', controller.example.data.asyncDataRender);
  router.get('/example/data/api/article', controller.example.data.article);
  router.get('/example', controller.example.index.index);
  router.get('/', controller.example.index.index);
};
