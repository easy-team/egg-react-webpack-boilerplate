'use strict';
module.exports = app => {
  return class TabController extends app.Controller {
    async tab() {
      const { ctx } = this;
      await ctx.render('tab.js', {
        title:'--Ant Design Tab--',
        keywords:'react, server side render, ant design',
        message: { text: 'Ant Design Tab'}});
    }
    async client() {
      const { ctx } = this;
      await ctx.renderClient('tab.js', {
        title:'--Ant Design Tab--',
        keywords:'react, server side render, ant design',
        message: { text: 'Ant Design Tab'}});
    }
  };
};