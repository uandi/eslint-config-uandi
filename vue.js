module.exports = {
    parserOptions: {
        parser: 'babel-eslint',
    },
    plugins: [
        'import',
    ],
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'plugin:vue/recommended',
        '@vue/prettier',
        require.resolve('./rules/prettier'),
        require.resolve('./rules/default'),
    ],
    rules: {},
};
