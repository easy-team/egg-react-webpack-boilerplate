import React, { Component } from 'react';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from 'component/spa/redux/components/home';
import About from 'component/spa/redux/components/about';

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const handleClick = e => {
  console.log('click ', e);
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { current: 'home' };
  }

  handleClick(e) {
    console.log('click ', e, this.state);
    this.setState({
      current: e.key
    });
  }

  render() {
    return <BrowserRouter>
      <div>
        <Menu onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="ssr">
            <a href="/spa/ssr">SPA-Redux-Server-Side-Render</a>
          </Menu.Item>
          <Menu.Item key="home">
            <Link to="/spa/redux">SPA-Redux-Client-Render</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/spa/redux/about">About</Link>
          </Menu.Item>
        </Menu>
        <Switch>
          <Route path="/spa/redux/about" component={About}/>
          <Route path="/spa/redux" component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>;
  }
}

export default App;
