import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import createStore from './store'
import createRouter from './router'
import Main from './view/main'
import '../../asset/css/blog.css'

// 直接渲染 React Component 组件，JSX 文件结尾的 Webpack entry 自动使用 react-entry-template-loader
export default class Entry extends Component {
  static async asyncData(locals) {
    const router = createRouter();
    const url = locals.url;
    const matchRouteList = matchRoutes(router, url);
    const promises = matchRouteList.map(matchRoute=> {
      const componentAsyncData = matchRoute.route.component.asyncData;
      return componentAsyncData instanceof Function ? componentAsyncData(locals, matchRoute) : null;
    });
    const list = await Promise.all(promises);
    return list.reduce((item, result) => {
      return { ...result, ...item}
    }, {});
  }

  render() {
    if (EASY_ENV_IS_BROWSER) {
      const store = createStore(window.__INITIAL_STATE__);
      const { url } = store.getState();
      return <Provider store={store}>
        <BrowserRouter location={url}>
          <Main></Main>
        </BrowserRouter>
      </Provider>;
    }
    const store = createStore(this.props);
    const { url } = store.getState();
    return <Provider store={store}>
      <StaticRouter location={url} context={{}}>
        <Main></Main>
      </StaticRouter>
    </Provider>;
  }
}