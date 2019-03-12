
module.exports = app => {
  app.get('/login', app.controller.admin.login);
  app.get('/(.*?)', app.controller.admin.index);
};
