
module.exports = app => {
  app.get('/', app.controller.ant.ant.tab);
  app.get('/c', app.controller.ant.ant.client);
};
