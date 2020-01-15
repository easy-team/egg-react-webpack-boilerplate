'use strict';
// https://yuque.com/easy-team/egg-react
module.exports = {
  egg: true,
  framework: 'react',
  entry: {
    home: 'app/web/page/home/home.jsx',
    node: 'app/web/page/node/index.jsx',
    detail: 'app/web/page/detail/index.jsx',
    intro: 'app/web/page/intro/index.jsx',
    test: 'app/web/page/test/index.jsx',
    async: 'app/web/page/async/async.jsx'
  },
  resolve: {
    alias: {
      'react': 'rax/lib/compat',
      'react-dom': 'rax-dom',
      'react-redux': 'rax-redux'
    }
  },
  plugins:[
    {
      imagemini: false
    }
  ]
};
