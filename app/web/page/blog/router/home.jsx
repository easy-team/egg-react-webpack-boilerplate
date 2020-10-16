import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { hot } from 'react-hot-loader/root'
import request from 'framework/request';
import './home.css'
class Home extends Component {
  static async asyncData(context, route) {
    return request.get('/api/blog/list', context);
  }

  render() {
    const { list = [] } = this.props;
    return <div className="easy-article-list">
      <ul>
        {list.map(function (item) {
          return <li key={item.id} className="easy-article-item">
            <h2 className="easy-article-title"><Link to={'/detail/' + item.id}>{item.title}</Link></h2>
            <div className="easy-article-summary">{item.summary}</div>
            <div className="easy-article-meta">
              <span>Word Count:{item.wordCount}  </span>
              <span>Create Time: {item.createTime}</span>
            </div>
          </li>;
        })}
      </ul>
    </div>;
  }
}


const mapStateToProps = state => {
  return {
    list: state.list
  };
};


const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(EASY_ENV_IS_DEV ? hot(Home) : Home);
