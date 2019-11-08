import React, { Component } from 'react';
import { connect } from 'react-redux';
import request from 'framework/request';
import { add, del } from '../store/actions';

class Home extends Component {
  static asyncData(context, route) {
    return request.get('/api/list', context.state).then(res => {
      return res.data;
    });
  }

  render() {
    return <div className="easy-artilce-list">
      <ul>
        {list.map(function (item) {
          return <li key={item.id}>
            <h2><a href={item.url} target="_blank">{item.title}</a></h2>
            <div>{item.summary}</div>
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
