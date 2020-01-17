import React, { Component } from 'react';
import { connect } from 'react-redux';
import request from 'framework/request';
import { add, del } from '../store/actions';
import './home.css'
class Home extends Component {
  static asyncData(context, route) {
    return request.get('/api/list', context).then(res => {
      return res.data;
    });
  }

  render() {
    const { list } = this.props;
    return <div className="easy-article-list">
      <ul>
        {list.map(function (item) {
          return <li key={item.id} className="easy-article-item">
            <h2 className="easy-article-title"><a href={'/detail/' + item.id} target="_blank">{item.title}</a></h2>
            <div className="easy-article-summary">{item.summary}</div>
            <div className="easy-article-meta">
              <span>11Word Count:{item.wordCount}  </span>
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

export default connect(mapStateToProps, { add, del })(Home);
