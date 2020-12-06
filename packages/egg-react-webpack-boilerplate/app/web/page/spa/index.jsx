import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import Layout from 'component/layout'
import { create } from 'component/article/store';
import Route from 'component/article/router';

import './index.css';

export default class Admin extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  onEnter = () => {
    console.log('>>test');
  }

  render() {
    if (EASY_ENV_IS_NODE) {
      const store = create(this.props);
      const { prefix, url } = store.getState();
      return (
        <Layout>
          <Provider store={ store }>
            <StaticRouter location={ url }>
              <Route prefix = {prefix} />
            </StaticRouter>
          </Provider>
        </Layout>
      );
    }
    const store = create(window.__INITIAL_STATE__);
    const { prefix, url } = store.getState();
    console.log('>>client prefix', prefix, url);
    return (
      <Provider store={ store }>
        <BrowserRouter location={ url }>
          <Route prefix = {prefix} url={ url }  />
        </BrowserRouter>
      </Provider>
    );
  }
}