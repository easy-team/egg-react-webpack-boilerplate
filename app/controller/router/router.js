
exports.index = function* () {
  yield this.render('router/router.js', { message: 'react server side render!' });
};
