'use strict';
const Resource = require('./lib/resource');
module.exports = app => {
  app.react.resource = new Resource(app);
};