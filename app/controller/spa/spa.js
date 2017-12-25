module.exports = app => {

  return class SPAController extends app.Controller {

    async client() {
      const { ctx } = this;
      await ctx.renderClient('spa/client.js', {});
    }

    async redux() {
      const { ctx } = this;
      await ctx.renderClient('spa/redux.js', {});
    }

    async ssr() {
      const { ctx } = this;
      await ctx.render('spa/ssr.js', { url: ctx.url });
    }

  };
};