# egg-react-webpack-boilerplate

基于 Egg + React + Webpack 多页面和单页面服务器渲染同构工程骨架项目, 文档请见: [Egg + React 解决方案](https://www.yuque.com/easy-team/egg-react)

![easy-react-admin](https://github.com/easy-team/egg-react-webpack-boilerplate/blob/master/docs/images/easy-react-admin.jpg)

## 版本

> 功能性需求或者Bug问题, 欢迎大家 PR 完善, 如果你需要了解更多信息，请加QQ群: 433207205(备注：Node.js).

因该项目包含了多种实现, 提供多种例子实现，为防干扰, 特提供纯净版本分支用于实际项目开发, 请自行选用。

- Egg + React 多页面服务端渲染方案 [feature/green/multi](https://github.com/easy-team/egg-react-webpack-boilerplate/tree/feature/green/multi)
- Egg + React + React Router + Redux + React-Redux 单页面服务端渲染方案 [feature/green/spa](https://github.com/easy-team/egg-react-webpack-boilerplate/tree/feature/green/spa)
- Egg + AntD + React Router + Redux + React-Redux  单页面前端渲染asset方案 [feature/green/asset](https://github.com/easy-team/egg-react-webpack-boilerplate/tree/feature/green/asset)
- Egg + AntD + React Router + Redux + React-Redux  单页面服务端渲染方案 [antd](https://github.com/easy-team/egg-react-webpack-boilerplate/tree/antd)
- Egg + AntD + React Router + Redux + React-Redux  单页面管理后台前端渲染方案 [easy-admin](https://github.com/easy-team/egg-react-webpack-boilerplate/tree/easy-admin)
- Egg + Antd 按需配置和主题定制 [antd-theme](https://github.com/easy-team/egg-react-webpack-boilerplate/tree/antd-theme) 和 [文档](https://www.yuque.com/easy-team/egg-react/antd)
- Egg + React + TypeScript 项目请见[egg-react-typescript-boilerplate](https://github.com/easy-team/egg-react-typescript-boilerplate)

可以通过 [easywebpack-cli](https://github.com/easy-team/easywebpack-cli) 命令行初始化对应类型项目。 

## 文档

- https://www.yuque.com/easy-team/egg-react
- https://zhuanlan.zhihu.com/easywebpack

## 特性

- 基于 React 多页面/单页面服务端客户端同构实现

- 基于 easywebpack 基础配置, 使用 es6 class 继承方式编写 webpack 配置

- 支持 server 和 client 端代码修改, webpack时时编译和热更新, `npm start` 一键启动应用

- 支持服务端渲染 `render` 和纯前端渲染 `renderClient`

- 支持自动根据 jsx 文件构建 webpack entry 入口文件

- 支持 css, sass, scss, less, stylus

- 支持 css module , 且同时支持 css 和 css module 共存的情况

- 支持 react-router, react-redux 服务端/客户端单页面渲染

- egg-webpack ^3.2.4 版本开始支持多进程编译

- easywebpack ^3.5.0 版本开始支持 webpack dll 自动化构建, 与多进程编译结合，构建速度减少 2/3

- Node 8 版本的 async 和 await 特性, Controller 采用 class 方式编写


## 依赖

- [easywebpack](https://github.com/easy-team/easywebpack) ^4.x.x
- [easywebpack-react](https://github.com/easy-team/easywebpack-react) ^4.x.x
- [egg-view-react-ssr](https://github.com/easy-team/egg-view-react-ssr) ^2.1.0
- [egg-webpack](https://github.com/easy-team/egg-webpack) ^4.x.x
- [egg-webpack-react](https://github.com/easy-team/egg-webpack-react) ^2.0.0

![工程化](http://hubcarl.github.io/img/webpack/egg-webpack-react-ssr.png)


## 使用

#### 安装cli

```bash
npm install easywebpack-cli -g
```

#### 安装依赖

```bash
npm install
```


#### 本地开发启动应用

```bash
npm run dev
```

应用访问: http://127.0.0.1:7001


![npm start启动](https://github.com/easy-team/egg-react-webpack-boilerplate/blob/master/docs/images/webpack.png)

#### 发布模式启动应用

- 首先在本地或者ci构建好jsbundle文件

```bash
npm run build 
```

- 然后,启动应用

```bash
npm start 
```

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
npm run build 或者 easy build

```

## 项目结构和基本规范

    ├── app
    │   ├── controller
    │   │   ├── test
    │   │   │   └── test.js
    │   ├── extend
    │   ├── lib
    │   ├── middleware
    │   ├── mocks
    │   ├── proxy
    │   ├── router.js
    │   ├── view
    │   │   ├── about                         // 服务器编译的jsbundle文件
    │   │   │   └── about.js
    │   │   ├── home
    │   │   │     └── home.js                 // 服务器编译的jsbundle文件
    │   │   └── layout.js                     // 编译的layout文件
    │   └── web                               // 前端工程目录
    │       ├── asset                         // 存放公共js,css资源
    │       ├── framework                     // 前端公共库和第三方库
    │       │   └── entry                          
    │       │       ├── loader.js              // 根据jsx文件自动生成entry入口文件loader
    │       ├── page                              // 前端页面和webpack构建目录, 也就是webpack打包配置entryDir
    │       │   ├── home                          // 每个页面遵循目录名, js文件名, scss文件名, jsx文件名相同
    │       │   │   ├── home.scss
    │       │   │   ├── home.jsx
    │       │   └── hello                          // 每个页面遵循目录名, js文件名, scss文件名, jsx文件名相同
    │       │       ├── test.css                   // 服务器render渲染时, 传入 render('test/test.js', data)
    │       │       └── test.jsx
    │       ├── store                             
    │       │   ├── app
    │       │   │   ├── actions.js
    │       │   │   ├── getters.js
    │       │   │   ├── index.js
    │       │   │   ├── mutation-type.js
    │       │   │   └── mutations.js
    │       │   └── store.js
    │       └── component                         // 公共业务组件, 比如loading, toast等, 遵循目录名, js文件名, scss文件名, jsx文件名相同
    │           ├── loading
    │           │   ├── loading.scss
    │           │   └── loading.jsx
    │           ├── test
    │           │   ├── test.jsx
    │           │   └── test.scss
    │           └── toast
    │               ├── toast.scss
    │               └── toast.jsx
    ├── config
    │   ├── config.default.js
    │   ├── config.local.js
    │   ├── config.prod.js
    │   ├── config.test.js
    │   └── plugin.js
    ├── doc
    ├── index.js
    ├── webpack.config.js                      // easywebpack-cli 构建配置
    ├── public                                 // webpack编译目录结构, render文件查找目录
    │   ├── static
    │   │   ├── css
    │   │   │   ├── home
    │   │   │   │   ├── home.07012d33.css
    │   │   │   └── test
    │   │   │       ├── test.4bbb32ce.css
    │   │   ├── img
    │   │   │   ├── change_top.4735c57.png
    │   │   │   └── intro.0e66266.png
    │   ├── test
    │   │   └── test.js
    │   └── vendor.js                         // 生成的公共打包库


## 功能实现

### 一.多页面服务器渲染同构实现

#### 1.编写jsx页面

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


#### 2.多页面后端实现

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

### 3.前端渲染

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
