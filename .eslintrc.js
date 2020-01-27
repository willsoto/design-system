const IGNORE = 0
const WARNING = 1
const ERROR = 2

module.exports = {
  root: true,
  env: {
    es6: true,
    'jest/globals': true
  },
  extends: [
    'standard',
    'standard-react',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    createDefaultProgram: true
  },
  plugins: ['@typescript-eslint', 'jest', 'react', 'react-hooks', 'prettier'],
  env: {
    'jest/globals': true
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': IGNORE,
    '@typescript-eslint/no-non-null-assertion': IGNORE,
    '@typescript-eslint/no-empty-interface': IGNORE,
    '@typescript-eslint/no-empty-function': WARNING,
    '@typescript-eslint/no-use-before-define': [
      ERROR,
      { classes: false, functions: false, variables: false }
    ],
    '@typescript-eslint/no-unused-vars': [ERROR, { argsIgnorePattern: '^_' }],
    '@typescript-eslint/require-await': WARNING,

    'import/extensions': [WARNING, 'always', { ignorePackages: true }],
    'react-hooks/exhaustive-deps': WARNING,
    'react-hooks/rules-of-hooks': ERROR,
    'react/jsx-no-bind': [IGNORE]
  },
  overrides: [
    {
      files: ['/**/*.tsx'],
      rules: {
        'import/extensions': [IGNORE],
        'react/prop-types': [IGNORE]
      }
    },
    {
      files: ['packages/site/pages/**/*.js', '**/__stories__/*.js'],
      rules: {
        'react/jsx-key': [IGNORE]
      }
    }
  ]
}
