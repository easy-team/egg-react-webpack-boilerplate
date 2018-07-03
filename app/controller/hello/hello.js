'use strict';
module.exports = app => {
  return class HelloController extends app.Controller {
    async element() {
      const { ctx } = this;
      await ctx.renderClient('hello/element.js', {
        title:'--react server side render--',
        keywords:'react, server side render',
        message: { text: 'react server side render for element!'}});
    }

    async component() {
      const { ctx } = this;
      await ctx.render('hello/component.js', {
        title:'--react server side render--',
        keywords:'react, server side render',
        message: { text: 'react server side render for component!'}});
    }
  };
};