'use strict';

module.exports = () => {
  const config = {};

  config.view = {
    defaultViewEngine: 'react',
    mapping: {
      '.js': 'react',
    },
  };

  config.react = {
    cache: true,
  };

  return config;
};

