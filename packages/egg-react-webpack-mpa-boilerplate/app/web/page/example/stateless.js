import React, { Component } from 'react';
import Layout from 'component/layout';

export default (props) => {
  return <Layout>
    <div className="main">
      <div className="page-container page-component">
        <h1>{props.text}</h1>
      </div>
    </div>
  </Layout>;
};