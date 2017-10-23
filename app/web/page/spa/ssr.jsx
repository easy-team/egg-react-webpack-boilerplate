import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {match, RouterContext} from 'react-router'
const { BrowserRouter, StaticRouter } = require('react-router-dom');

import Header from 'component/layout/standard/header/header.jsx';
import SSR from 'component/spa/ssr/ssr';
import store from 'component/spa/ssr/store';
import './spa.css';

if (typeof window === 'object') {
  ReactDOM.render(
    <div>
      <Header></Header>
      <Provider store={store}>
        <BrowserRouter>
          <SSR />
        </BrowserRouter>
      </Provider>
    </div>,
    document.getElementById('app')
  );
} else {
  module.exports = class App extends Component {
    render() {
      return <div>
        <Header></Header>
        <Provider store={store}>
          <StaticRouter>
            <SSR />
          </StaticRouter>
        </Provider>
      </div>;
    }
  }
}




