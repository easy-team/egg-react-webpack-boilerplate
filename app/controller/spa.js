module.exports = app => {

  return class SPAController extends app.Controller {

    async client() {
      const { ctx } = this;
      await ctx.renderClient('client.js', {});
    }

    async redux() {
      const { ctx } = this;
      await ctx.renderClient('redux.js', {});
    }

    async ssr() {
      const { ctx } = this;
      await ctx.render('ssr.js', { url: ctx.url });
    }

  };
};