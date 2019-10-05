
module.exports = app => {
  app.get('/login', app.controller.app.login);
  app.get('/(.*?)', app.controller.app.index);
};
