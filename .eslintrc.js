module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'quotes': 'off',
    'semi': 'off',
    '@typescript-eslint/quotes': ['warn', 'single'],
    "@typescript-eslint/semi": ['warn', 'never'],
    '@typescript-eslint/space-infix-ops': 'warn',
    '@typescript-eslint/space-before-function-paren': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ]
}
