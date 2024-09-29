import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  pluginJs.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: { globals: globals.node },
    rules: {
      semi: 'error',
      'no-unused-vars': ['error', { args: 'none' }],
      'no-undef': 'error',
    },
  },
  {
    files: ['*.json'],
    languageOptions: { globals: globals.node },
    parser: 'jsonc-eslint-parser',
    rules: {
      semi: 'off',
      'no-unused-vars': 'off',
      'no-undef': 'off',
    },
  },
];
