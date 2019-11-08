'usestrict';
const egg = require('egg');
module.exports = class IndexController extends egg.Controller {
  
  async ssr(ctx) {
    await ctx.render('home.js', { url: ctx.url });
  }

  async csr(ctx) {
    const result = this.service.article.getArtilceList();
    await ctx.renderClient('home.js', result);
  }

  async list() {
    this.ctx.body = this.service.article.getArtilceList();
  }

  async detail() {
    const id = this.ctx.query.id;
  }
};