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
ReactDOM.render(<Entry />, root);

if (EASY_ENV_IS_DEV) {
  module.hot.accept();
}
