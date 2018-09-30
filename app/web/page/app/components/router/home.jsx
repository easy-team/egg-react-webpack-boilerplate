import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, del } from '../store/actions';

class Home extends Component {
  static fetch() {
    return Promise.resolve({
      list: [{
        id: 0,
        title: 'Egg + React 服务端渲染骨架',
        summary: '基于Egg + React + Webpack3/Webpack2 服务端渲染同构工程骨架项目',
        hits: 550,
        url: 'https://github.com/hubcarl/egg-react-webpack-boilerplate'
      }, {
        id: 1,
        title: '前端工程化解决方案easywebpack',
        summary: 'programming instead of configuration, webpack is so easy',
        hits: 550,
        url: 'https://github.com/hubcarl/easywebpack'
      }, {
        id: 2,
        title: '最强大的 Webpack CLI 工具 easywebpack-cli',
        summary: 'easywebpack command tool, support init Vue/Reac/Weex boilerplate',
        hits: 278,
        url: 'https://github.com/hubcarl/easywebpack-cli'
      }]
    }).then(data => {
      return data;
    });
  }

  render() {
    const { add, del, list } = this.props;
    const id = list.length + 1;
    const item = {
      id,
      title: `Egg+React 服务端渲染骨架-${id}`,
      summary: '基于Egg + React + Webpack3/Webpack2 服务端渲染骨架项目',
      hits: 550 + id,
      url: 'https://github.com/hubcarl/egg-react-webpack-boilerplate'
    };
    return <div className="redux-nav-item">
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


const mapStateToProps = state => {
  return {
    list: state.list
  };
};

export default connect(mapStateToProps, { add, del })(Home);
