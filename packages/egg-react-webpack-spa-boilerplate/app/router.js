
'use strict';
module.exports = app => {
  app.redirect('/', '/spa');
  app.get('/spa/login', app.controller.spa.index.login);
  app.get('/spa(/.*)?', app.controller.spa.index.home);
};
