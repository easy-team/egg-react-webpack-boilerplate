'use strict';
module.exports = app => {
  return class TestController extends app.Controller {
    async asyncComponentRender(ctx) {
      await ctx.render('async.js', { message: 'Egg React Server Side Async Render' });
    }
    async asyncDataRender(ctx) {
      const title = 'Frontend asyncData 获取渲染数据';
      await ctx.render('asyncData.js', { title });
    }
    
    async article(ctx) {
      const article = await ctx.service.article.getArticle(1);
      ctx.body = { article };
    }
  };
};