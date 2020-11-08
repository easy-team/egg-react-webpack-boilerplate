'use strict';
// 数据请求 https://www.yuque.com/easy-team/egg-react/asyncdata
module.exports = app => {
  return class DataController extends app.Controller {
   
    async nodeDataRender(ctx) {
      const title = 'Node 直接获取渲染数据';
      const article = await ctx.service.mock.getArticle(1);
      await ctx.render('example/node.js', { title, article });
    }

    async contextRender(ctx) {
      const title = 'Node 直接获取渲染数据';
      const article = await ctx.service.mock.getArticle(1);
      await ctx.render('example/context.js', { title, article });
    }
    
    async asyncDataRender(ctx) {
      const title = '前端 React 代码 asyncData 获取渲染数据';
      await ctx.render('example/data.js', { title });
    }

    async article(ctx) {
      const article = await ctx.service.mock.getArticle(1);
      ctx.body = { article };
    }
  };
};