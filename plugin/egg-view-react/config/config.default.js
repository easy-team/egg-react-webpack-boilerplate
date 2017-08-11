'use strict';

module.exports = () => {
  const config = {};

  config.view = {
    defaultViewEngine: 'react',
    mapping: {
      '.js': 'react',
      '.jsx': 'react',
    },
  };

  return config;
};

