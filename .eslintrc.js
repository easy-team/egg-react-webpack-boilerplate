module.exports = {
  env: {
    node: true,
    es6: true,
    mocha: true
  },
  parser: 'babel-eslint',
  extends: 'eslint:recommended',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    'new-cap': 'off',
    'newline-after-var': 'off',
    'no-unused-vars': 'off',
    'no-invalid-this': 'off',
    'guard-for-in': 'off',
    'no-console': 'off',
    'no-undefined': 'off',
    'array-bracket-spacing': 'off',
    'no-unused-expressions': 'off',
    'linebreak-style': 'off',
    'func-style': 'off',
    'comma-dangle': ['error', 'never']
  },
  plugins: ['react'],
  globals: {
    window: true,
    document: true,
    EASY_ENV_IS_PROD: true,
    EASY_ENV_IS_NODE: true,
    EASY_ENV_IS_BROWSER: true,
    EASY_ENV_IS_DEV: true
  }
};
