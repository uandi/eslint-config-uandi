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
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        require.resolve('./rules/prettier'),
        require.resolve('./rules/default'),
    ],
    rules: {},
};
