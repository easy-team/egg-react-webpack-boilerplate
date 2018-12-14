import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './home';
import About from './about';

import { Menu } from 'antd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { current: this.props.url };
  }

  handleClick(e) {
    this.setState({
      current: e.key
    });
  }

  render() {
    return <BrowserRouter>
      <div>
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
      </div>
    </BrowserRouter>;
  }
}

export default App;
