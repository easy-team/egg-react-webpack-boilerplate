'use strict';
module.exports = app => {
  return class IntroController extends app.Controller {
    async index(ctx) {
      await ctx.render('intro.js', { message: 'Egg React Server Side Render 使用说明' });
    }
  };
};