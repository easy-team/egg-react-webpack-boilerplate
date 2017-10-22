import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';

import reducers from 'component/spa/reducers'
import Header from 'component/layout/standard/header/header.jsx';
import './redux.css';
// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(createHistory(), store);

const Home = () => (<div className="redux-nav-item">Home!</div>);
const About = () => (<div className="redux-nav-item">About!</div>);

ReactDOM.render(
  <div>
    <Header></Header>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <ul className="redux-nav">
            <li><Link to="/spa/redux">Home</Link></li>
            <li><Link to="/spa/redux/about">About</Link></li>
          </ul>
          <Switch>
            <Route path="/spa/redux/about" component={About}/>
            <Route path="/spa/redux" component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  </div>,
  document.getElementById('app')
);