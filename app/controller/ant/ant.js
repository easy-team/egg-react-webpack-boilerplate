'use strict';
exports.tab = function* () {
  yield this.render('ant/tab/tab.js', {
    title:'--ant design server side render--',
    keywords:'react, server side render, ant design',
    message: { text: 'react ant design server side render demo!'}});
};
