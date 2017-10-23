import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add, del } from 'component/spa/redux/actions';

class Home extends Component {
  render() {
    const { add, del, list } = this.props;
    const id = list.length + 1;
    const item = {
      id,
      title: `${id}:webpack配置官方文档`,
      summary: 'webpack is a module bundler for modern JavaScript applications.',
      hits: 550 + id,
      url: 'https://webpack.js.org/configuration/'
    };
    return <div className="redux-nav-item">
      <div>Home!</div>
      <div className="container">
        <div className="row row-offcanvas row-offcanvas-right">
          <div className="col-xs-12 col-sm-9">
            <ul className="smart-artiles" id="articleList">
              {list.map(function(item) {
                return <li key={item.id}>
                  <div className="point">+{item.hits}</div>
                  <div className="card">
                    <h2><a href={item.url} target="_blank">{item.title}</a></h2>
                    <div>
                      <ul className="actions">
                        <li>
                          <time className="timeago">{item.moduleName}</time>
                        </li>
                        <li className="tauthor">
                          <a href="#" target="_blank" className="get">Sky</a>
                        </li>
                        <li><a>+收藏</a></li>
                        <li>
                          <span className="timeago">{item.summary}</span>
                        </li>
                        <li>
                          <span className="redux-btn-del" onClick={() => del(item.id)}>Delete</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="redux-btn-add" onClick={() => add(item)}>Add</div>
    </div>;
  }
}


function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  return {
    list: state.list
  }
}

export default connect(mapStateToProps, { add, del })(Home)