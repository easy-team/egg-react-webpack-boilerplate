'use strict';
const React = require('react');
const ReactDOMServer = require('react-dom/server');

class Engine {
  constructor(app) {
    this.app = app;
    this.config = app.config.react;
  }

  render(name, locals) {
    const reactClass = require(name);
    return Promise.resolve(this.renderToString(reactClass, locals));
  }

  renderMarkup(name, locals) {
    const reactClass = require(name);
    return Promise.resolve(this.renderToStaticMarkup(reactClass, locals));
  }

  renderToString(reactClass, locals) {
    return ReactDOMServer.renderToString(React.createElement(reactClass, locals));
  }

  renderToStaticMarkup(reactClass, locals) {
    return ReactDOMServer.renderToStaticMarkup(React.createElement(reactClass, locals));
  }
}

module.exports = Engine;
