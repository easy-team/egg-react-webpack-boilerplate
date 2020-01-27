'use strict';

import React, { Component } from 'react';
import Layout from 'component/layout/blog';
import Header from 'component/header/top'
import '../../asset/css/blog.css'
import './index.css'
export default class Detail extends Component {
  render() {
    const { article } = this.props;
    return <Layout {...article}>
      <Header></Header>
      <h2 className="easy-article-title">{article.title}</h2>
      <div className="easy-article-info">
        <iframe src={article.url} frameBorder="0" width="100%" style={{minHeight: '800px'}}></iframe>
      </div>
    </Layout>
  }
}