'use strict';

class View {
  constructor(ctx) {
    this.ctx = ctx;
    this.app = ctx.app;
  }

  render(name, locals, options) {
    return Promise.resolve(this.app.react.renderToString(name, locals, options));
  }

  renderString() {
    return Promise.reject('not implemented yet!');
  }
}

module.exports = View;
