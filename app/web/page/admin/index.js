import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import App from 'framework/app'
import createStore from './store';
import createRouter from './router'
import Entry from './view/main'
import '../../asset/css/blog.css'
import './index.css';

export default new App({
  Entry,
  createRouter,
  createStore
}).bootstrap();
