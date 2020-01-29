module.exports = {
    parserOptions: {
        parser: 'babel-eslint',
    },
    plugins: [
        'import',
    ],
    env: {
        // Environment setting for predefined global variables
    },
    extends: [
        'plugin:vue/recommended',
        '@vue/prettier',
        require.resolve('./rules/prettier'),
        require.resolve('./rules/default'),
    ],
    rules: {},
};
