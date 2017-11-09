import React, { Component } from 'react';
import Header from 'component/header/header.jsx';
import { Tabs } from 'antd';
import './tab.css';
const TabPane = Tabs.TabPane;

const tabItemClick = (key) =>{
  console.log('tab click',key);
};

export default class Module extends Component {
  render() {
    return <div>
      <Header></Header>
      <div className="tab">
        <div>{this.props.message.text}</div>
        <Tabs defaultActiveKey="1" onChange={tabItemClick}>
          <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
      </div>
    </div>;
  }
}