'use strict';
module.exports = app => {
  return class TestController extends app.Controller {
    async asyncRender(ctx) {
      await ctx.render('test/async.js', { message: 'Egg React Server Side Async Render' });
    }
  };
};