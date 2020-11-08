'usestrict';
const egg = require('egg');
module.exports = class IndexController extends egg.Controller {
  // 服务端渲染 https://www.yuque.com/easy-team/egg-react/node
  async ssr(ctx) {
    const entry = ctx.query.mode === 'jsx' ? 'blogx.js' : 'blog.js';
    await ctx.render(entry, { 
      url: ctx.url,
      title: 'Egg React ',
      keywords: 'Egg,React,Egg React,Egg React SSR, Egg React CSR, Server Side Render, Client Side Render',
      description: 'Egg + React + Webpack 服务端渲染 SSR (Server Side Render) 和 前端渲染 CSR (Client Side Render) 工程骨架项目'
    });
  }

  async node(ctx) {
    const result = this.service.article.getArtilceList();
    console.time('render');
    await ctx.render('list.js', result);
    console.timeEnd('render');
  }

  // 前端渲染 https://www.yuque.com/easy-team/egg-react/web
  async csr(ctx) {
    const result = this.service.article.getArtilceList();
    await ctx.renderClient('blog.js', result);
  }

  async list() {
    this.ctx.body = this.service.article.getArtilceList();
  }

  async detail(ctx) {
    const id = ctx.params.id;
    const article = this.service.article.getArticle(Number(id));
    ctx.body = { article };
  }
};