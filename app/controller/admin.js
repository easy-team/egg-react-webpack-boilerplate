module.exports = app => {
  return class AdminController extends app.Controller {
    async login() {
      const { ctx } = this;
      await ctx.renderClient('login.js', {});
    }
    async index() {
      const { ctx } = this;
      const list = [{
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
      }];
      await ctx.renderClient('admin.js', { url: ctx.url, list });
    }
  };
};