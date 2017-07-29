'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/view-react-ssr.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/view-react-ssr-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, reactssr')
      .expect(200);
  });
});
