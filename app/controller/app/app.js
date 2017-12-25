const Model = require('../../mocks/article/list');
module.exports = app => {
  return class AppController extends app.Controller {
    
    async index() {
      const { ctx } = this;
      await ctx.render('app/app.js', { url: this.ctx.url.replace(/\/app/, '')});
    }
    async list() {
      const { ctx } = this;
      const pageIndex = ctx.query.pageIndex;
      const pageSize = ctx.query.pageSize;
      ctx.body = Model.getPage(pageIndex, pageSize);
    }

    async detail() {
      const { ctx } = this;
      const id = ctx.query.id;
      ctx.body = Model.getDetail(id);
    }
  };
};