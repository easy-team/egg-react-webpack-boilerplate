import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Header from '../../component/header/header.jsx';
import App from './route';
import store from './store';

if (EASY_ENV_IS_DEV) {
  module.hot.accept();
}
ReactDOM.render(
  <div>
    <Header></Header>
    <Provider store={store}>
      <App url = { store.getState().url } />
    </Provider>
  </div>,
  document.getElementById('app')
);
