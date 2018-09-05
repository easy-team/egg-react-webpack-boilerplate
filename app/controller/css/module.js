'use strict';
module.exports = app => {
  return class CssModuleController extends app.Controller {
    async index() {
      const { ctx } = this;
      await ctx.render('css/module.js', {
        title:'--react server side render--',
        keywords:'react, server side render',
        message: { text: 'react server side render! support css module test!'}});
    }
  };
};