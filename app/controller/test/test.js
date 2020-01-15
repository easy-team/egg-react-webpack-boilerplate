'use strict';
const path = require('path');
module.exports = app => {
  return class TestController extends app.Controller {
    async asyncRender(ctx) {
      await ctx.render('async.js', { message: 'Egg React Server Side Async Render' });
    }
    async ssr(ctx) {
      await ctx.render('test.js', {
        title: 'Egg Rax SSR',
        message: 'Egg Rax Server Side Render' 
      });
    }
    async csr(ctx) {
      await ctx.renderClient('test.js', {
        title: 'Egg Rax CSR',
        message: 'Egg Rax Client Side Render' 
      });
    }
    async asset(ctx) {
      await ctx.renderAsset('test.js', {
        title: 'Egg Rax Asset',
        message: 'Egg Rax Asset Side Render' 
      }, { layout: path.join(ctx.app.baseDir, 'app/web/view/layout_asset.html')});
    }
  };
};