'usestrict';
const egg = require('egg');
module.exports = class IndexController extends egg.Controller {
  
  async ssr(ctx) {
    await ctx.render('home.js', { 
      url: ctx.url,
      title: 'Egg React ',
      keywords: 'Egg,React,Egg React,Egg React SSR, Egg React CSR, Server Side Render, Client Side Render',
      description: 'Egg + React + Webpack 服务端渲染 SSR (Server Side Render) 和 前端渲染 CSR (Client Side Render) 工程骨架项目'
    });
  }


  async node(ctx) {
    const result = this.service.article.getArtilceList();
    console.time('render');
    await ctx.render('blog.js', result);
    console.timeEnd('render');
  }

  async csr(ctx) {
    const result = this.service.article.getArtilceList();
    await ctx.renderClient('home.js', result);
  }

  async list() {
    this.ctx.body = this.service.article.getArtilceList();
  }

  async detail(ctx) {
    const id = ctx.params.id;
    const article = this.service.article.getArticle(Number(id));
    await ctx.render('detail.js', { 
      title: `${article.title}|Egg React `,
      keywords: 'Egg,React,Egg React,Egg React SSR, Egg React CSR, Server Side Render, Client Side Render',
      description: `${article.summary} | Egg + React + Webpack 服务端渲染 SSR (Server Side Render) 和 前端渲染 CSR (Client Side Render) 工程骨架项目`,
      article
    });
  }
};