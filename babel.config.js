module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        'modules': false,
        'targets': {
          'browsers': [
            'last 2 versions'
          ]
        }
      }
    ]
  ],
  plugins: [
    'react-hot-loader/babel',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-object-rest-spread',
    [
      'import',
      {
        'libraryName': 'antd',
        'style': 'css'
      }
    ]
  ]
}