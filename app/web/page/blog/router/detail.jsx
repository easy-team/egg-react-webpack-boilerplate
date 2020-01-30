'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader/root'

import request from '../../../framework/request';

class Detail extends Component {
  static async asyncData(locals, route) {
    const id = route.match.params.id;
    return request.get(`/api/blog/${id}`, locals);
  }

  render() {
    const { article } = this.props;
    return article ? <div>
      <h2 className="easy-article-detail-title">{article.title}</h2>
      <div className="easy-article-info">
        <iframe src={article.url} frameBorder="0" width="100%" style={{minHeight: '800px'}}></iframe>
      </div>
    </div> : null;
  }
}


const mapStateToProps = state => {
  return {
    article: state.article
  };
};

export default connect(mapStateToProps)(EASY_ENV_IS_DEV ? hot(Detail) : Detail)
