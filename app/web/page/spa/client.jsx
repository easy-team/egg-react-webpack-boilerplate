import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {
  render,
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Header from 'component/header/header.jsx';

const App = () => (
  <Router>
    <div>
      <Header></Header>
      <h2>Official Site</h2>
      <ul>
        <li><Link to="/spa/client/">Home</Link></li>
        <li><Link to="/spa/client/product">Product</Link></li>
        <li><Link to="/spa/client/about">About</Link></li>
      </ul>
      <Route path="/spa/client/:id?" component={Child}/>
    </div>
  </Router>
);

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));


