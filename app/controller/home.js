const Model = require('../mocks/article/list');
module.exports = app => {
  return class AppController extends app.Controller {
    async index() {
      const { ctx } = this;
      await ctx.render('app.js', { url: ctx.url });
    }

    async list() {
      const { ctx } = this;
      await ctx.render('list.js', Model.getPage(1, 10));
    }

    async stateless() {
      const { ctx } = this;
      await ctx.render('stateless.js', Model.getPage(1, 10));
    }

    async promise() {
      const { ctx } = this;
      await ctx.render('promise.js', { message: 'React Promise Hook Test' });
    }

    async client() {
      const { ctx } = this;
      await ctx.renderClient('list.js', Model.getPage(1, 10));
    }

    async pager() {
      const { ctx } = this;
      const pageIndex = ctx.query.pageIndex;
      const pageSize = ctx.query.pageSize;
      ctx.body = Model.getPage(pageIndex, pageSize);
    }
  };
};