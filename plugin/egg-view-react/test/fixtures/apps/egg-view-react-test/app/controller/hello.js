'use strict';
const path = require('path');
const Controller = require('egg').Controller;
module.exports = class helloController extends Controller {
  * index() {
    yield this.ctx.render('hello/hello.jsx', { message: { text: 'react server side render!' } });
  }

  * markup() {
    const filepath = path.join(this.config.view.root[0], 'hello/hello.jsx');
    this.ctx.body = this.app.react.renderMarkup(filepath, { message: { text: 'react server side render!' } });
  }
};