import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import { asyncData, bootstrap } from '../../framework/app'
import createStore from './store'
import createRouter from './router'
import Main from './view/main'
import '../../asset/css/blog.css'

class Entry extends Component {
  static async asyncData(context) {
    const router = createRouter();
    return asyncData(context, router);
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

export default bootstrap(Entry);