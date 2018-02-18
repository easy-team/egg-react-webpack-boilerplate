
module.exports = app => {
  app.redirect('/', '/ssr', 302);
  app.get('/redux(/.+)?', app.controller.spa.redux);
  app.get('/client(/.+)?', app.controller.spa.client);
  app.get('/ssr(/.+)?', app.controller.spa.ssr);
};
