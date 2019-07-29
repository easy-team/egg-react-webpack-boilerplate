# egg-react-nunjucks-boilerplate

基于 Egg + React + Webpack + Nunjucks 前端渲染骨架项目, 开发前请阅读 [nunjucks渲染](https://www.yuque.com/easy-team/egg-react/html)

## 文档

- https://yuque.com/easy-team/egg-react
- https://zhuanlan.zhihu.com/easywebpack

## 特性

- 基于 React + React-Router + React-Redux 单页面 Nunjucks 前端渲染方案

## 依赖

- [easywebpack](https://github.com/hubcarl/easywebpack) ^4.0.0
- [easywebpack-react](https://github.com/hubcarl/easywebpack-react) ^4.0.0
- [egg-view-nunjucks](https://github.com/eggjs/egg-view-nunjucks) ^2.0.0
- [egg-webpack](https://github.com/hubcarl/egg-webpack) ^4.0.0

## 使用

#### 安装cli

```bash
npm install easywebpack-cli -g
```

#### 安装依赖

```bash
npm install
```

#### 启动应用

```bash
npm run dev
```

应用访问: http://127.0.0.1:7001


![npm start启动](https://github.com/hubcarl/egg-react-webpack-boilerplate/blob/master/docs/images/webpack.png)

#### 项目构建

```bash
// 直接运行(编译文件全部在内存里面,本地开发使用)
npm start

// 编译文件到磁盘打包使用(发布正式环境)
npm run build 或者 easy build
```

## License

[MIT](LICENSE)