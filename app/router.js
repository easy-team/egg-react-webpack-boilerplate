
module.exports = app => {
  app.get('/', app.controller.home.index);
  app.get('/about', app.controller.home.index);
  app.get('/list', app.controller.home.list);
  app.get('/stateless', app.controller.home.stateless);
  app.get('/promise', app.controller.home.promise);
  app.get('/api/article/list', app.controller.home.pager);
};
