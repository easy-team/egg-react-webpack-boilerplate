
module.exports = app => {
  app.get('/', app.controller.home.home.index);
  app.get('/client', app.controller.home.home.client);
  app.get('/hello/element', app.controller.hello.hello.element);
  app.get('/ant/tab', app.controller.ant.ant.tab);
  app.get('/pager', app.controller.home.home.pager);
};
