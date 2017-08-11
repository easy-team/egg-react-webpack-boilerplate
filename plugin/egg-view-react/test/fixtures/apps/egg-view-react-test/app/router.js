'use strict';

module.exports = app => {
  app.get('/', function* () {
    this.body = 'hi, ' + app.plugins.react.name;
  });

  app.get('/hello', app.controller.hello.index);
  app.get('/markup', app.controller.hello.markup);

};
