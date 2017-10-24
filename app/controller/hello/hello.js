'use strict';
exports.element = function* () {
  yield this.render('hello/element.js', {
    title:'--react server side render--',
    keywords:'react, server side render',
    message: { text: 'react server side render for element!'}});
};

exports.component = function* () {
  yield this.render('hello/component.js', {
    title:'--react server side render--',
    keywords:'react, server side render',
    message: { text: 'react server side render for component!'}});
};
