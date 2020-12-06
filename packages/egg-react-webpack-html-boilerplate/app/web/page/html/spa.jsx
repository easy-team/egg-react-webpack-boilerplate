
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { create } from 'component/article/store';
import Route from 'component/article/router';

import 'antd/dist/antd.css';

export default class Admin extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const store = create(window.__INITIAL_STATE__);
    const { prefix, url } = store.getState();
    return (
      <Provider store={ store }>
        <BrowserRouter location={ url }>
          <Route prefix={ prefix } url={ url }  />
        </BrowserRouter>
      </Provider>
    );
  }
}