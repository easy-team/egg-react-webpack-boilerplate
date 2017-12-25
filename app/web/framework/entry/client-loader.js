module.exports = function() {
  this.cacheable();
  return `
    import React from 'react';
    import ReactDom from 'react-dom';
    import { AppContainer } from 'react-hot-loader';
    import Entry from '${this.resourcePath.replace(/\\/g, '\\\\')}';
    const state = window.__INITIAL_STATE__;
    const render = (App)=>{
      ReactDom.hydrate(EASY_ENV_IS_DEV ? <AppContainer><App {...state} /></AppContainer> : <App {...state} />, document.getElementById('app'));
    };

    if (EASY_ENV_IS_DEV && module.hot) {
      module.hot.accept('${this.resourcePath.replace(/\\/g, '\\\\')}', () => { render(Entry) });
    }
    render(Entry);
  `;
};
