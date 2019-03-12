module.exports = app => {
  return class AdminController extends app.Controller {
    async index() {
      const { ctx } = this;
      await ctx.renderClient('admin.js', { url: ctx.url });
    }
  };
};