'use strict';
const mm = require('egg-mock');
const { 
  webpackReady, 
  assertCSRAppNode,
  assertDevModeResource
} = require('../utils/helper');

describe('test/controller/asset.test.js', () => {
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

    it('should work when simple', async () => {
      await app
        .httpRequest()
        .get('/asset/simple')
        .expect(200)
        .expect(res => {
          assertCSRAppNode(res);
          assertDevModeResource(res, 'asset/simple');
        });
    });

    it('should work when spa', async () => {
      await app
        .httpRequest()
        .get('/asset')
        .expect(200)
        .expect(res => {
          assertCSRAppNode(res);
          assertDevModeResource(res, 'asset/spa');
        });
    });
  });
});
