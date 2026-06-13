const { FlatCompat } = require('@eslint/eslintrc');
const recommended = require('eslint/conf/eslint-recommended');
const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: recommended && (recommended.default || recommended) });

module.exports = [
  // bring in legacy configs
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ),
  // project specific rules
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module'
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react/function-component-definition': [
        'error',
        { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }
      ]
    },
    settings: {
      react: { version: 'detect' }
    }
  }
];
