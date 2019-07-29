module.exports = app => {
  return class AppController extends app.Controller {
    async html() {
      const { ctx } = this;
      await ctx.render('layout.tpl', { url: ctx.path });
    }
  };
};