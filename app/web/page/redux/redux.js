import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader';
import Header from 'component/header/header.jsx';
import App from 'component/spa/redux/app';
import store from 'component/spa/redux/store';


// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(createHistory(), store);
const RApp = () => {
  return EASY_ENV_IS_DEV ? <AppContainer><App /></AppContainer> : <App />;
};
ReactDOM.render(
  <div>
    <Header></Header>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('app')
);
if (EASY_ENV_IS_DEV && module.hot) {
  module.hot.accept();
}