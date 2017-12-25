
module.exports = app => {

  return class TestController extends app.Controller {

    async index() {
      const { ctx } = this;
      await ctx.render('test/test.js', { title: 'error test', message: 'react server side render!' });
    }
    
  };
};