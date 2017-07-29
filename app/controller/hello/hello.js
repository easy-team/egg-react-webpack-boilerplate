'use strict';
exports.index = function* () {
  yield this.render('hello/hello.js', {
    title:'--react server side render--',
    keywords:'react, server side render',
    message: { text: 'react server side render!'}});
};
