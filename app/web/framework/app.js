import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, StaticRouter } from 'react-router-dom'
import { matchRoutes } from 'react-router-config'

export default class App {
  constructor(config) {
    this.config = config;
  }

  bootstrap() {
    if (EASY_ENV_IS_NODE) {
      return this.server();
    }
    return this.client();
  }

  client() {
    const { Entry, createStore } = this.config;
    const store = createStore(window.__INITIAL_STATE__);
    const url = store.getState().url;
    const root = document.getElementById('app');
    const render = root.childNodes.length > 0 ? 'render' : 'hydrate';
    ReactDOM[render](<Provider store={store}>
      <BrowserRouter>
        <Entry url={url} />
      </BrowserRouter>
    </Provider>, root);
  }

  server() {
    return context => {
      const { Entry, createRouter, createStore } = this.config;
      const url = context.state.url;
      const router = createRouter();
      const matchRoute = matchRoutes(router, url);
      const promises = matchRoute.map(({ route }) => {
        const asyncData = route.component.asyncData;
        return asyncData instanceof Function ? asyncData(context, route) : Promise.resolve(null)
      });
      return Promise.all(promises).then(list => {
        const data = list.reduce((item, result) => {
          return Object.assign(result, item);
        }, {});
        Object.assign(context.state, data);
        const store = createStore(context.state);
        return () => {
          return <Provider store={store}>
            <StaticRouter location={url} context={{}}>
              <Entry url={url} />
            </StaticRouter>
          </Provider>
        }
      });
    };
  }
}