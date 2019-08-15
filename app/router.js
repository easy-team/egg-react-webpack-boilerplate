
module.exports = app => {
  app.get('/', app.controller.app.index);
  app.get('/test', app.controller.app.test);
};
