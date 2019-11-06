import React, { Component } from 'react';
import Layout from '../../component/layout.jsx';
import List from './componets/list';
import './index.css';

export default (props) => {
  return <Layout>
    <div className="main">
      <div className="page-container page-component">
        <List list={props.list}></List>
      </div>
    </div>
  </Layout>;
};