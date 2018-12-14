
module.exports = app => {
  app.get('*', app.controller.app.index);
};
