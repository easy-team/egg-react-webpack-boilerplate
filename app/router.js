
module.exports = app => {
  app.get('/', app.controller.home.index);
  app.get('/about', app.controller.home.index);
  app.get('/js', app.controller.home.js);
  app.get('/jsx', app.controller.home.jsx);
  app.get('/api/article/list', app.controller.home.pager);
};
