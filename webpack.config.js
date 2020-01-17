'use strict';
// https://yuque.com/easy-team/egg-react
module.exports = {
  devtool: 'source-map',
  entry: {
    home: 'app/web/page/home/index.js',
    blog: 'app/web/page/blog/index.jsx',
    detail: 'app/web/page/detail/index.jsx',
    intro: 'app/web/page/intro/index.jsx',
    'test/async': 'app/web/page/async/async.jsx',
    hello: 'app/web/page/home/view/hello.js'
  },
  plugins:[
    {
      imagemini: false
    }
  ]
};
