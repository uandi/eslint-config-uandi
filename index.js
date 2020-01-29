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
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        require.resolve('./rules/prettier'),
        require.resolve('./rules/default'),
    ],
    rules: {},
};
