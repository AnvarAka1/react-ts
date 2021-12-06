module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'quotes': 'off',
    'semi': 'off',
    'no-console': 'error',
    'no-empty': 'off',
    'no-empty-function': 'off',
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-space-before-closing': ['error', 'always'],
    'react/jsx-boolean-value': ['error', 'always'],
    'react/no-adjacent-inline-elements': 'error',
    'react/no-array-index-key': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    "@typescript-eslint/semi": ['error', 'never'],
    '@typescript-eslint/space-infix-ops': 'error',
    '@typescript-eslint/space-before-function-paren': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    'prettier'
  ]
}
