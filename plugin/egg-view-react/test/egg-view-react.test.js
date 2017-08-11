'use strict';

const mm = require('egg-mock');
const assert = require('assert');

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
    return app.httpRequest()
      .get('/')
      .expect('hi, react')
      .expect(200);
  });

  it('should GET /hello', () => {
    return app.httpRequest()
      .get('/hello')
      .expect(200)
      .expect(res => {
        assert(res.text.includes('data-react-checksum'));
        assert(res.text.includes('react server side render!'));
      });
  });
  it('should GET /markup', () => {
    return app.httpRequest()
      .get('/markup')
      .expect(200)
      .expect(res => {
        assert(!res.text.includes('data-react-checksum'));
        assert(res.text.includes('react server side render!'));
      });
  });
});
