import React, { Component } from 'react';
import request from '../../framework/request';
import Layout from 'component/layout';

class AsyncDataMode extends Component {
  
  static async asyncData(locals) {
    return request.get('/example/data/api/article', locals);
  }

  render() {
    const { title, article } = this.props;
    return <Layout>
      <h1 className="easy-article-detail-title">{title}</h1>
      <h2 className="easy-article-detail-title">{article.title}</h2>
      <div className="easy-article-info">
        <iframe src={article.url} frameBorder="0" width="100%" style={{minHeight: '800px'}}></iframe>
      </div>
    </Layout>;
  }
}

export default AsyncDataMode;