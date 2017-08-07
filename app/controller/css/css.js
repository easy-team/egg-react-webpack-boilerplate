'use strict';
exports.cssModule = function* () {
  yield this.render('css/module/module.js', {
    title:'--react server side render--',
    keywords:'react, server side render',
    message: { text: 'react server side render! support css module test!'}});
};
