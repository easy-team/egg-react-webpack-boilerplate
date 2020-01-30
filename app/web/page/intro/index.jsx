'use strict';

import React, { Component } from 'react';
import Layout from 'component/layout';
import Header from 'component/header'
import '../../asset/css/blog.css'
import './index.css'

export default class Intro extends Component {
  render() {
    return <Layout>
      <Header></Header>
      <h2 className="easy-intro-title">{this.props.message}</h2>
      <div className="easy-intro-info">
        <h3>1.Egg React 工程方案</h3>
        <p>Egg + React 工程化解决方案, 支持 Egg + React 服务端(Server Side Render) 和 前端渲染模式(Client Side Render ).</p>
        <p>GitHub: <a target="_blank" href="https://github.com/easy-team/egg-react-webpack-boilerplate">https://github.com/easy-team/egg-react-webpack-boilerplate</a></p>
        <p>Document:<a target="_blank" href="https://www.yuque.com/easy-team/egg-react">https://www.yuque.com/easy-team/egg-react</a></p>
      </div>
      <div className="easy-intro-info">
        <h3>2.Webpack entry 配置说明</h3>
        <p>1. .jsx 文件后缀这种模式可以直接渲染 React Component 组件，而无需编写 React.render 初始化代码，统一 <a target="_blank" href='https://github.com/easy-team/react-entry-template-loader'>react-entry-template-loader</a> 插件提供的模板进行 React 页面初始化。也就是如下标准的 React  Component 可以直接渲染出完整的 HTM 网页。</p>
        <p>2. .js 文件后缀这种模式需要自己编写 React.render 代码且需要自己判断 SSR 还是前端渲染</p>
        <a target="_blank" href="https://www.yuque.com/easy-team/egg-react/config">https://www.yuque.com/easy-team/egg-react/config</a>
      </div>
      <div className="easy-intro-info">
        <h3>3.Egg React 服务端渲染模式</h3>
        <p>
          服务端渲染指的是编写的 React 组件在 Node 服务端直接编译成完整的HTML, 然后直接输出给浏览器。
          MVVM 服务端渲染相比前端渲染，支持SEO，更快的首屏渲染，相比传统的模板引擎，更好的组件化，前后端模板共用。
          同时 MVVM 数据驱动方式有着更快的开发效率。
          总体来说，MVVM 框架的服务端渲染技术比较适合有一定交互性，且对SEO，首屏速度有要求的业务应用。
          当然, 如果想用于不属于该类型的项目(比如各种后台管理系统)也是可以的, 就当纯粹的玩一玩 React SSR 开发。
          <a target="_blank" href="https://www.yuque.com/easy-team/egg-react/node">https://www.yuque.com/easy-team/egg-react/node</a>
        </p>
      </div>
    </Layout>
  }
}