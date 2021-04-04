module.exports = {
  extends: [
    './node_modules/@tinkoff/linters/eslint/base/prettier',
    './node_modules/@tinkoff/linters/eslint/angular',
  ],
  parserOptions: {
    project: './tsconfig.base.json',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',
  },
};
