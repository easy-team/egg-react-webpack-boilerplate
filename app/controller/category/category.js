'use strict';
module.exports = app => {
  return class CategoryController extends app.Controller {
    async index(ctx) {
      await ctx.render('category.js', { message: 'Egg React Server Side Render: Category' });
    }
  };
};