import React, { Component } from 'react';
import './index.css';
export default class Header extends Component {
  
  state = {
    collapsed: false
  }

  menuToggle = () => {
    console.log('>>click');
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return <div>
      <nav className="easy-menu easy-menu-default easy-menu-custom easy-menu-fixed-top">
        <div className="easy-menu-menu-fluid">
          <div className="easy-menu-header page-scroll">
            <div className="easy-menu-toggle" onClick={this.menuToggle}></div>
            <a className="easy-menu-brand" href="/">Egg + React</a>
          </div>
          <div className="collapse easy-menu-collapse" className={ this.state.collapsed ? 'collapse easy-menu-collapse collapse in' : 'collapse easy-menu-collapse' } id="bs-example-easy-menu-collapse-1">
            <ul className="nav easy-menu-nav easy-menu-right">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/intro">QuickStart</a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/easy-team">GitHub</a>
              </li>
              <li>
                <a target="_blank" href="https://yuque.com/easy-team">Document</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="easy-intro-header" style={{backgroundColor:'#3c763d'}}>
        <div className="easy-top-intro-container">
          <div className="easy-top-intro-info">
            <div>
              {/* <img src="../../../../asset/images/loading.gif" width="80px" height="80px" style="display: inline"> */}
            </div>
            <div className="easy-top-intro-info-text">
              <h1>Egg React 工程方案</h1>
              <hr className="large" />
              <span className="subheading">Egg React Server Side Render(SSR)</span>
            </div>
          </div>
        </div>
      </header>
    </div>;
  }
}
