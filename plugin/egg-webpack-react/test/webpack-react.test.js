'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/webpack-react.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/webpack-react-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, webpackreact')
      .expect(200);
  });
});
