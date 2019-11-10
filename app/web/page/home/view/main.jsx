import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from 'component/layout/default'
import Header from 'component/header'
import Home from '../router/home';
import Async from '../router/async';
import About from '../router/about';

import { Menu, Icon } from 'antd';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { current: props.url };
  }

  handleClick(e) {
    console.log('click', e, this.state);
    this.setState({
      current: e.key
    });
  }

  render() {
    return <Layout {...this.props}>
      <Header></Header>
      <Menu onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/async">
          <Link to="/async">Async</Link>
        </Menu.Item>
        <Menu.Item key="/about">
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
      <Switch>
        <Route path="/async" component={Async}/>
        <Route path="/about" component={About}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Layout>;
  }
}

const mapStateToProps = state => {
  return state
}; 
export default connect(mapStateToProps)(Main);
