
module.exports = app => {
  app.get('/test', app.controller.app.test);
  app.get('/*', app.controller.app.index);
};
