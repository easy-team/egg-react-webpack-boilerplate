
module.exports = app => {
  app.get('/', app.controller.home.home.index);
  app.get('/client', app.controller.home.home.client);
  app.get('/hello/element', app.controller.hello.hello.element);
  app.get('/hello/component', app.controller.hello.hello.component);

  app.get('/css/module', app.controller.css.css.cssModule);
  app.get('/ant/tab', app.controller.ant.ant.tab);
  app.get('/element', app.controller.home.home.element);
  app.get('/pager', app.controller.home.home.pager);
  app.get('/about', app.controller.about.about.index);
  app.get('/router', app.controller.router.router.index);
  app.get('/app/api/article/list', app.controller.app.app.list);
  app.get('/app/api/article/:id', app.controller.app.app.detail);
  app.get('/app(/.+)?', app.controller.app.app.index);
  app.get('/spa/redux(/.+)?', app.controller.spa.spa.redux);
  app.get('/spa/client(/.+)?', app.controller.spa.spa.client);
  app.get('/spa(/.+)?', app.controller.spa.spa.ssr);
  app.get('/test', app.controller.test.test.index);
};
