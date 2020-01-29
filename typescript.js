module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    env: {
        // Environment setting for predefined global variables
    },
    plugins: [
        'import',
    ],
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        require.resolve('./rules/prettier'),
        require.resolve('./rules/default'),
    ],
    rules: {},
};
