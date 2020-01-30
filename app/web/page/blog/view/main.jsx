import React, { Component } from 'react';
import { Link, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root'
import { ARTICLE_LIST, ARTICLE_DETAIL } from '../store/constant';
import Layout from '../../../component/layout'
import Header from '../../../component/header'
import Route from '../router/route';
import Home from '../router/home';
import Detail from '../router/detail';
import Example from '../router/example';
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
        <li onClick={this.tabClick.bind(this)}><Link to="/example">Example</Link></li>
        <li onClick={this.tabClick.bind(this)}><Link to="/about">About</Link></li>
      </ul>
      <Switch>
        <Route type={ARTICLE_DETAIL} path="/detail/:id" component={Detail} />
        <Route path="/example" component={Example}/>
        <Route path="/async" component={Async}/>
        <Route path="/about" component={About}/>
        <Route type={ARTICLE_LIST} path="/" component={Home}/>
      </Switch>
    </Layout>;
  }
}

export default EASY_ENV_IS_DEV ? hot(Main) : Main;
