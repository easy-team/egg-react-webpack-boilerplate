'use strict';
const mm = require('egg-mock');
const { 
  webpackReady, 
  assertSSR,
  assertDevJSResource,
  assertText
} = require('../utils/helper');

describe('test/controller/example.test.js', () => {
  describe('GET /', () => {
    let app;
    before(async () => {
      mm.env('local');
      app = mm.app();
      await app.ready();
      await webpackReady(app);
    });

    afterEach(mm.restore);
    after(() => app.close());

    it('should work when example', async () => {
      await app
        .httpRequest()
        .get('/example')
        .expect(200)
        .expect(res => {
          assertSSR(res);
          assertDevJSResource(res, 'example');
        });
    });
    it('should work when example hook', async () => {
      await app
        .httpRequest()
        .get('/example/hook')
        .expect(200)
        .expect(res => {
          assertSSR(res);
          assertDevJSResource(res, 'example/hook');
          assertText(res, 'React Hook Component Server Render');
        });
    });
    it('should work when example async', async () => {
      await app
        .httpRequest()
        .get('/example/async')
        .expect(200)
        .expect(res => {
          assertSSR(res);
          assertDevJSResource(res, 'async');
        });
    });
    it('should work when example/stateless', async () => {
      await app
        .httpRequest()
        .get('/example/stateless')
        .expect(200)
        .expect(res => {
          assertSSR(res);
          assertDevJSResource(res, 'example/stateless');
          assertText(res, '<h1>React Stateless Component Server Render</h1>');
        });
    });
    it('should work when example node', async () => {
      await app
        .httpRequest()
        .get('/example/data/node')
        .expect(200)
        .expect(res => {
          assertSSR(res);
          assertDevJSResource(res, 'example/node');
          assertText(res, 'Node 直接获取渲染数据')
        });
    });
    it('should work when example asyncData', async () => {
      await app
        .httpRequest()
        .get('/example/data/async')
        .expect(200)
        .expect(res => {
          assertSSR(res);
          assertDevJSResource(res, 'example/data');
          assertText(res, '前端 React 代码 asyncData 获取渲染数据')
        });
    });
  });
});
