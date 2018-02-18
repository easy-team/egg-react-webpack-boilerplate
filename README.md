# egg-react-webpack-boilerplate

基于 Egg + React + Webpack3 多页面服务端渲染同构工程骨架项目

- Egg 版本： ^2.x.x
- Node 版本: Node ^8.x.x+
- Webpack 版本: ^3.10.0, 对应 `easywebpack-react` 版本为 3.6.0
- React 版本: ^15.0.0, ^16.0.0, 

## 文档

- http://hubcarl.github.io/easywebpack/react/rule
- https://zhuanlan.zhihu.com/easywebpack

## 特性

- 基于 React 多页面服务端客户端同构实现

- 支持 server 和 client 端代码修改, webpack时时编译和热更新, `npm start` 一键启动应用

- 支持服务端渲染 `render` 和纯前端渲染 `renderClient`

- 支持自动根据 jsx 文件构建 webpack entry 入口文件

- easywebpack ^3.5.0 版本开始支持 webpack dll 自动化构建, 与多进程编译结合，构建速度减少 2/3

- Node 8 版本的 async 和 await 特性, Controller 采用 class 方式编写


## 依赖

- [easywebpack](https://github.com/hubcarl/easywebpack) ^3.5.3
- [easywebpack-react](https://github.com/hubcarl/easywebpack-react) ^3.5.0
- [egg-view-react-ssr](https://github.com/hubcarl/egg-view-react-ssr) ^2.1.0
- [egg-webpack](https://github.com/hubcarl/egg-webpack) ^2.4.6
- [egg-webpack-react](https://github.com/hubcarl/egg-webpack-react) ^2.0.0

![工程化](http://hubcarl.github.io/img/webpack/egg-webpack-react-ssr.png)


## 使用

#### 安装cli

```bash
npm install easywebpack-cli -g
```

#### 安装依赖

```bash
npm install
npm start
```


#### 启动应用

```bash
npm start
```

应用访问: http://127.0.0.1:7001


![npm start启动](https://github.com/hubcarl/egg-react-webpack-boilerplate/blob/master/docs/images/webpack.png)

### 配置说明


```js
`config/config.local.js` 
const EasyWebpack = require('easywebpack-react');
exports.webpack = {
  webpackConfigList: EasyWebpack.getWebpackConfig()
};
```

构建会同时启动两个webpack构建服务, 客户端js构建(build/client), 服务端构建(build/server), 默认端口9000,  webpackConfigList 端口依次递增. 


#### 项目构建

```bash
// 直接运行(编译文件全部在内存里面,本地开发使用)
npm start

// 编译文件到磁盘打包使用(发布正式环境)
npm run build 或者 easywebpack build prod

```


## 功能实现

### 多页面服务器渲染同构实现

#### 编写jsx页面

在app/web/page 目录下面创建home目录, home.jsx, home.css文件.

- home.jsx 编写界面逻辑

```js
import React, { Component } from 'react';
import Header from 'component/layout/standard/header/header.jsx';
import List from 'component/home/list.jsx';
import './home.css';
export default class Home extends Component {
  componentDidMount() {
    console.log('----componentDidMount-----');
  }

  render() {
    return <div>
      <Header></Header>
      <div className="main">
        <div className="page-container page-component">
          <List list={this.props.list}></List>
        </div>
      </div>
    </div>;
  }
}
```


#### 多页面后端实现

- 创建controller文件home.js

```javascript
exports.index = function* (ctx) {
  yield ctx.render('home/home.js', Model.getPage(1, 10));
};
```

- 添加路由配置

```javascript
app.get('/home', app.controller.home.home.index);
```

### 前端渲染

- 创建controller的home.js 添加如下代码

```javascript
exports.client = function* (ctx) {
  yield ctx.renderClient('home/home.js', Model.getPage(1, 10));
};
```

- 添加路由配置

```javascript
app.get('/client', app.controller.home.home.client);
```

## License

[MIT](LICENSE)