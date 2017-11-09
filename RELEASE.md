# 版本发布


## 3.2.0

### 依赖

-  react ^15, ^16
-  react-dom ^15, ^16
-  egg-view-react-ssr ^2.0.0
-  egg-webpack-react ^2.0.0
-  webpack-manifest-resource-plugin ^1.0.0

### 变更说明

- React 不再内置插件 egg-view-react 里面, 由项目自己根据需要安装指定版本, 支持 React 15, 16

- 升级 egg-view-react-ssr 为 ^2.0.0  不再依赖 egg-view-react, 解决了 Egg 多引擎问题

- manifest 资源依赖不在运行期处理(plugins.manifest, 改为构建期间处理(plugins.manifestDeps), 同时不再需要生成 buildConfig.json 文件

- webpack.config.js 配置变更, 目前采用兼容方式, 待 Webpack 发布 4.0 时, webpack-manifest-plugin 替换为 webpack-manifest-resource-plugin 

```json
{
   plugins: {
     buildfile: true,
     manifest: true
   }
}
```


```json
{
   plugins: {
     buildfile: false,
     manifest: false,   // old manifest feature
     manifestDeps: true // new manifest feature, not need buildfile
   }
}
```

- 增加 Webpack entry server loader 模板, 见 webpack.config.js

3.1.0 之前, layout.jsx 和 页面.jsx 会 调用 renderToString 和 renderToStaticMarkup, 然后再组装

3.2.0 之后, 通过 props.children 方式解决layout和页面继承问题. 这样处理后只会调用 renderToString 一次.



```json
{
    entry: {
        loader: {
          client: 'app/web/framework/entry/client-loader.js',
          server: 'app/web/framework/entry/server-loader.js'
        }
  },
}
```

- 支持服务端渲染失败, 客户端重新渲染

- 增加 <!DOCTYPE html> 组装


## 3.1.0

### 依赖

-  react ^15
-  react-dom ^15
-  egg-view-react-ssr ^1.1.0
-  egg-webpack-react ^1.0.0
-  webpack-manifest-plugin ^1.0.0