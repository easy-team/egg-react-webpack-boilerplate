import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from 'component/spa/ssr/components/home';
import About from 'component/spa/ssr/components/about';

import { Menu, Icon } from 'antd';

const tabKey = { '/spa/ssr': 'home', '/spa/ssr/about': 'about' };
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
          <Link to="/spa/ssr">SPA-Redux-Server-Side-Render</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/spa/ssr/about">About</Link>
        </Menu.Item>
      </Menu>
      <Switch>
        <Route path="/spa/ssr/about" component={About}/>
        <Route path="/spa/ssr" component={Home}/>
      </Switch>
    </div>;
  }
}

export default App;
