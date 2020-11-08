'use strict';
// html 前端渲染 https://www.yuque.com/easy-team/egg-react/html
module.exports = (app) => {
  return class AppController extends app.Controller {
    async spa() {
      const { ctx } = this;
      const list = ctx.service.mock.getArticleList();
      await ctx.render('spa.tpl', {
        prefix: '/html',
        url: ctx.path,
        list
      });
    }
    async simple() {
      const { ctx } = this;
      await ctx.render('simple.tpl', { title: 'Hello, Welcome!' });
    }
  };
};
