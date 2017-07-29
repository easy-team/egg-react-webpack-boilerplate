
exports.index = function* () {
  yield this.render('test/test.js', { title: 'error test', message: 'react server side render!' });
};
