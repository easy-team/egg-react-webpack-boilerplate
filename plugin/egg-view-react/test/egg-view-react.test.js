'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/egg-view-react.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/egg-view-react-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, eggViewReact')
      .expect(200);
  });
});
