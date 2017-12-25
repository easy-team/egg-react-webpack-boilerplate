'use strict';
module.exports = app => {
  return class AboutController extends app.Controller {
    async index() {
      const { ctx } = this;
      await ctx.render('about/about.js', { message: 'react server side render!' });
    }
  };
};