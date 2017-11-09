module.exports = function(source) {
  this.cacheable();
  const resourcePath = this.resourcePath;
  return `
    import React from 'react';
    import ReactDom from 'react-dom';
    import App from '${this.resourcePath.replace(/\\/g, '\\\\')}';
    const state = window.__INITIAL_STATE__;
    ReactDom.hydrate(<App {...state} />, document.getElementById('app'));
  `;
};
