import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root'
import Layout from 'component/layout/default'
import Header from 'component/header'
import Home from '../router/home';
import Async from '../router/async';
import About from '../router/about';
import './main.css';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = { current: props.url };
  }

  tabClick(e) {
    console.log('click', e.target);
  }

  render() {
    return <Layout {...this.props}>
      <Header></Header>
      <ul className="menu-tab">
        <li onClick={this.tabClick.bind(this)}><Link to="/">Home</Link></li>
        <li onClick={this.tabClick.bind(this)}><Link to="/async">Async</Link></li>
        <li onClick={this.tabClick.bind(this)}><Link to="/about">About</Link></li>
      </ul>
      <Switch>
        <Route path="/async" component={Async}/>
        <Route path="/about" component={About}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Layout>;
  }
}

export default EASY_ENV_IS_DEV ? hot(Main) : Main;
