'use strict';
const path = require('path');
module.exports = {
  egg: true,
  framework: 'react',
  commonsChunk: ['vendor'],
  buildConfig: false,
  manifest: false,
  entry: {
    include: 'app/web/page',
    exclude: ['app/web/page/test'],
    loader: {
      client: 'app/web/framework/entry/loader.js'
    }
  },
  alias: {
    asset: 'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework'
  },
  create(){
    if (this.type === 'server') {
      this.addEntry('layout', path.join(this.config.baseDir, 'app/web/view/layout.jsx'));
    }
  }
};