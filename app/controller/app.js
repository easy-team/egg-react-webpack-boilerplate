module.exports = app => {
  return class AppController extends app.Controller {
    async index() {
      const { ctx } = this;
      await ctx.render('app.tpl', { url: ctx.path });
    }
    async test() {
      const { ctx } = this;
      await ctx.render('test.tpl', { message: 'Hello, Welcome!' });
    }
  };
};