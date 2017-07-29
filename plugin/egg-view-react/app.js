'use strict';

module.exports = app => {
  app.view.use('react', require('./lib/view'));
};
