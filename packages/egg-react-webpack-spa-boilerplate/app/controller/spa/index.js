
module.exports = app => {
  return class AdminController extends app.Controller {
    async login() {
      const { ctx } = this;
      await ctx.renderClient('login.js', {});
    }

    async home(ctx) {
      const list = ctx.service.mock.getArticleList(); 
      if (ctx.query.mode === 'ssr') {
        await ctx.render('spa.js', { prefix: '/spa', url: ctx.url, list });
      } else {
        await ctx.renderClient('spa.js', { prefix: '/spa', url: ctx.url, list });
      } 
    }
  };
};