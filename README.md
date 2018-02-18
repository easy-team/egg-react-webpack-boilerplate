# egg-react-webpack-boilerplate

基于 Egg + React + Webpack3 单页面服务端渲染同构工程骨架项目

- Egg 版本： ^2.x.x
- Node 版本: Node ^8.x.x+
- Webpack 版本: ^3.10.0, 对应 `easywebpack-react` 版本为 3.6.0
- React 版本: ^15.0.0, ^16.0.0, 

## 文档

- http://hubcarl.github.io/easywebpack/react/rule
- https://zhuanlan.zhihu.com/easywebpack

## 特性

- 基于 React 单页面服务端客户端同构实现

- 支持服务端渲染 `render` 和纯前端渲染 `renderClient`

- 支持 react-router, react-redux 服务端/客户端单页面渲染

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

#### 项目构建

```bash
// 直接运行(编译文件全部在内存里面,本地开发使用)
npm start

// 编译文件到磁盘打包使用(发布正式环境)
npm run build 或者 easywebpack build prod
```

## License

[MIT](LICENSE)