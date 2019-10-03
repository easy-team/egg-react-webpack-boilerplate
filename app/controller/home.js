const Model = require('../mocks/article/list');
module.exports = app => {
  return class AppController extends app.Controller {
    async index() {
      const { ctx } = this;
      await ctx.render('app.js', { url: ctx.url });
    }

    async js() {
      const { ctx } = this;
      await ctx.render('js.js', Model.getPage(1, 10));
    }

    async jsx() {
      const { ctx } = this;
      await ctx.render('jsx.js', Model.getPage(1, 10));
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