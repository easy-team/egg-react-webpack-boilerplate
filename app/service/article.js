const egg = require('egg');
module.exports = class ArticeService extends egg.Service {
  getList() {
    return [{
      id: 0,
      title: 'Egg + React 服务端渲染骨架',
      summary: '基于Egg + React + Webpack3/Webpack2 服务端渲染同构工程骨架项目',
      hits: 550,
      url: 'https://yuque.com/easy-team/egg-react'
    }, {
      id: 1,
      title: '前端工程化解决方案 easywebpack',
      summary: 'programming instead of configuration, webpack is so easy',
      hits: 550,
      url: 'https://yuque.com/easy-team/easywebpack'
    }, {
      id: 2,
      title: '最强大的 Webpack CLI 工具 easywebpack-cli',
      summary: 'easywebpack command tool, support init Vue/Reac/Weex boilerplate',
      hits: 278,
      url: 'https://yuque.com/easy-team/easywebpack-cli'
    }];
  }
}