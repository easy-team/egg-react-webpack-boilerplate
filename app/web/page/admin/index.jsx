import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { create } from './store';
import Route from './router';

import './index.css';

export default class Admin extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const store = create(window.__INITIAL_STATE__);
    const url = store.getState().url;
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <Route url={ url }/>
        </BrowserRouter>
      </Provider>
    );
  }
}