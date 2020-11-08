'use strict';

const { create } = require('./shell');

const common_files = [
  'babel.config.js',
  '.eslintrc.js',
  '.eslintignore',
  '.gitignore',
  'LICENSE'
];

const scopeMapping = {
  'egg-react-webpack-spa-boilerplate': {
    files:[
      'app/controller/spa/index.js',
      'app/service/mock.js',
      'app/middleware/', 
      'app/mocks/article/',
      'app/web/asset',
      'app/web/component',
      'app/web/framework',
      'app/web/page/spa',
      'app/web/page/login',
      'app/web/view/layout.html',
      'app/view',
      'config',
      "test/utils",
      "test/controller/spa.test.js"
    ]
  },
  'egg-react-webpack-mpa-boilerplate': {
    files:[
      'app/controller/example',
      'app/controller/intro',
      'app/service/mock.js',
      'app/middleware/', 
      'app/mocks/article/',
      'app/web/asset',
      'app/web/component',
      'app/web/framework',
      'app/web/page/example',
      'app/web/page/intro',
      'app/web/view/layout.html',
      'app/view',
      'config',
      "test/utils",
      "test/controller/example.test.js"
    ]
  },
  'egg-react-webpack-asset-boilerplate': {
    files:[
      'app/controller/asset',
      'app/service/mock.js',
      'app/middleware/', 
      'app/mocks/article/',
      'app/web/asset',
      'app/web/component',
      'app/web/framework',
      'app/web/page/asset',
      'app/web/view',
      'app/view',
      'config',
      "test/utils",
      "test/controller/asset.test.js"
    ]
  },
  'egg-react-webpack-html-boilerplate': {
    files:[
      'app/controller/html',
      'app/service/mock.js',
      'app/middleware/', 
      'app/mocks/article/',
      'app/web/asset',
      'app/web/component',
      'app/web/framework',
      'app/web/page/html',
      'app/web/view/layout.tpl',
      'app/view',
      'config',
      "test/utils",
      "test/controller/html.test.js"
    ]
  }
};

if (process.argv.length === 4 && process.argv[2] === '--scope') {
  const scope = process.argv[3];
  const { files: scopeFiles } = scopeMapping[scope];
  const files = [...common_files, ...scopeFiles];
  create(files, {
    sourceName: 'egg-react-webpack-boilerplate',
    targetName: scope
  });
}
