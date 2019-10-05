import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StaticRouter, BrowserRouter } from 'react-router-dom';
import Layout from '../../component/layout'
import { create } from './store';
import Route from './router';
import './index.css';

export default class Admin extends Component {
  render() {
    const isNode = EASY_ENV_IS_NODE;
    const store = create(isNode ? this.props : window.__INITIAL_STATE__);
    const url = store.getState().url;
    return <Layout>
        <Provider store={ store }>
          {
            isNode ? 
            <StaticRouter location={url}>
              <Route url={ url }/>
            </StaticRouter>:
            <BrowserRouter>
              <Route url={ url }/>
            </BrowserRouter>
          }
        </Provider>
    </Layout>
  }
}