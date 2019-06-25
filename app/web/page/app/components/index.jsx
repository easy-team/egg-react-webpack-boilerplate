import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './router/home';
import About from './router/about';

import { Menu, Icon } from 'antd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { current: props.url };
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
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/about">
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>;
  }
}

export default App;
