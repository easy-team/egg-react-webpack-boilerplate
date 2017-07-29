exports.index = function* () {
  yield this.render('about/about.js', { message: 'react server side render!' });
};
