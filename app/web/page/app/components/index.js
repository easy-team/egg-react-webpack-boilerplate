import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './router/home';
import About from './router/about';

import { Menu, Icon } from 'antd';

const tabKey = { '/': 'home', '/about': 'about' };
class App extends Component {
  constructor(props) {
    super(props);
    const { url } = props;
    this.state = { current: tabKey[url] };
  }

  handleClick(e) {
    console.log('click ', e, this.state);
    this.setState({
      current: e.key
    });
  }

  render() {
    return <div>
      <Menu onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </div>;
  }
}

export default App;
