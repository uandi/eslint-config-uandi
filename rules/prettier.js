var prettierConfig = require('../.prettierrc');

modules.exports = {
    extends: [
        'plugin:prettier/recommended',
    ],
    rules: {
        'prettier/prettier': [2, prettierConfig],
    },
};
