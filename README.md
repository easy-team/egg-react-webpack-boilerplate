# egg-react-webpack-boilerplate

基于 Egg + AntD + Webpack 框架的 Admin 骨架项目, 文档请见: [Egg + React 解决方案](https://www.yuque.com/easy-team/egg-react)



## 文档

- https://www.yuque.com/easy-team/egg-react
- https://zhuanlan.zhihu.com/easywebpack

## 特性

![npm start启动](https://github.com/easy-team/egg-react-webpack-boilerplate/blob/easy-admin/docs/images/easy-react-admin.jpg)


## 依赖

- [easywebpack](https://github.com/easy-team/easywebpack) ^4.x.x
- [easywebpack-react](https://github.com/easy-team/easywebpack-react) ^4.x.x
- [egg-view-react-ssr](https://github.com/easy-team/egg-view-react-ssr) ^2.1.0
- [egg-webpack](https://github.com/easy-team/egg-webpack) ^4.x.x
- [egg-webpack-react](https://github.com/easy-team/egg-webpack-react) ^2.0.0


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


#### 项目构建

```bash
// 直接运行(编译文件全部在内存里面,本地开发使用)
npm start

// 编译文件到磁盘打包使用(发布正式环境)
npm run build 或者 easy build

```

## License

[MIT](LICENSE)
