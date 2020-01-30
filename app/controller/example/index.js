'use strict';
module.exports = app => {
  return class ExampleController extends app.Controller {
  
    async asyncComponentRender(ctx) {
      await ctx.render('async.js', { message: 'Egg React Server Side Async Component Render' });
    }

    async statelessRender() {
      const { ctx } = this;
      await ctx.render('example/stateless.js', {
        text: 'React Stateless Component Server Render'
      });
    }
    
  };
};