import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeTwoTone, MenuFoldOutlined, InfoCircleOutlined } from '@ant-design/icons';

import Home from './home/index';
import Detail from './detail/index';
import About from './about/index';
import './index.css';

const { Header, Sider, Content } = Layout;

export default class AppRoute extends Component {
  state = {
    title: 'easy-admin',
    collapsed: false,
    prefix: this.props.prefix,
    defaultSelectedKeys: [this.props.url]
  };

  toggle = () => {
    this.setState({
      title: this.state.collapsed ? 'easy-admin' : 'admin',
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <Layout className="admin" style={{height: '100vh'}}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">{ this.state.title }</div>
          <Menu className={ this.state.collapsed ? 'left-menu-collapsed' : 'left-menu'} 
            theme="dark" mode="inline" defaultSelectedKeys={this.state.defaultSelectedKeys}>
            <Menu.Item key={ this.state.prefix }>
              <HomeTwoTone />
              <Link to={ this.state.prefix }>Home</Link>
            </Menu.Item>
            <Menu.Item key={this.state.prefix + '/about'}>
              <InfoCircleOutlined />
              <Link to={this.state.prefix + '/about'}>About</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <MenuFoldOutlined
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <Switch>
              <Route exact path={this.state.prefix} component={Home}/>
              <Route exact path={this.state.prefix + '/detail'} component={Detail}/>
              <Route exact path={this.state.prefix + '/about'} component={About}/>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}