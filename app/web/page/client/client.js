import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {
  render,
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { AppContainer } from 'react-hot-loader';
import Header from 'component/header/header.jsx';

const App = () => (
  <Router>
    <div>
      <Header></Header>
      <h2>Official Site</h2>
      <ul>
        <li><Link to="/client/">Home</Link></li>
        <li><Link to="/client/product">Product</Link></li>
        <li><Link to="/client/about">About</Link></li>
      </ul>
      <Route path="/client/:id?" component={Child}/>
    </div>
  </Router>
);

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);
const Client = () => {
  return EASY_ENV_IS_DEV ? <AppContainer><App /></AppContainer> : <App />;
};
ReactDOM.render(<Client />, document.getElementById('app'));


