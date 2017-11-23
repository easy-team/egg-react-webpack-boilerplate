module.exports = function(source) {
  this.cacheable();
  const resourcePath = this.resourcePath;
  return `
    import React from 'react';
    import ReactDom from 'react-dom';
    import { AppContainer } from 'react-hot-loader';
    import Entry from '${this.resourcePath.replace(/\\/g, '\\\\')}';
    const state = window.__INITIAL_STATE__;
    const render = (App)=>{
      ReactDom.hydrate(isDev ? <AppContainer><App {...state} /></AppContainer> : <App {...state} />, document.getElementById('app'));
    };

    if (isDev && module.hot) {
      module.hot.accept('${this.resourcePath.replace(/\\/g, '\\\\')}', () => { render(Entry) });
    }
    render(Entry);
  `;
};
