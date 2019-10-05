import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Header from 'component/header/header.jsx';
import App from './route';
import store from './store';

const Entry = () => (
  <div>
    <Header></Header>
    <Provider store={store}>
      <App url = { store.getState().url } />
    </Provider>
  </div>
);
const root = document.getElementById('app');

if (EASY_ENV_IS_DEV) {
  module.hot.accept();
  // 本地开发模式 css inline 闪烁问题
  setTimeout(() => {
    ReactDOM.render(<Entry />, root);
  }, 500);
} else {
  ReactDOM.render(<Entry />, root);
}
