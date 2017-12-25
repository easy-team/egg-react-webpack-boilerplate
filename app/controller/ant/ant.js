'use strict';
module.exports = app => {
  return class TabController extends app.Controller {
    async tab() {
      const { ctx } = this;
      await ctx.render('ant/tab/tab.js', {
        title:'--ant design server side render--',
        keywords:'react, server side render, ant design',
        message: { text: 'react ant design server side render demo!'}});
    }
  };
};