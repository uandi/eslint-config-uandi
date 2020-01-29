# ESLint and Prettier Setup

NOTE: This is currently a draft version!

This package provides u+i's base ESLint and Prettier configs.

## What it does

* Lint JavaScript based on the latest standards
* Fixes issues and formatting errors with Prettier
* Lints + Fixes inside of html script tags
* Lints + Fixes JavaScript via eslint-config-airbnb-base

## Install

1. If you don't already have a `package.json` file, create one with `npm init`.
2. Then we need to install everything needed by the config:
    ```
    npm install --dev eslint@^6.8.0 prettier@^1.19.1 @uandi/eslint-config
    or
    yarn add -D eslint@^6.8.0 prettier@^1.19.1 @uandi/eslint-config
    ```
3. You can see in your `package.json` there are now a big list of devDependencies.
4. Create a `.eslintc` file in the root of your project's directory (it should live where package.json does). Your `.eslintrc` file should look like this:
    ```json
    {
        "extends": [
            // for standard JavaScript projects
            "uandi"

            // for vue projects
            "uandi/vue"

            // for typescript projects
            "uandi/typescript"
        ]
    }
    ```
    Chose one of the given presets depending on your needs.
5. You can add two scripts to your `package.json` to lint and/or fix:
    ```json
    "scripts": {
        // for JavaScript projects
        "lint": "eslint . --ext .js,.jsx",
        "lint:fix": "eslint . --fix --ext .js,.jsx",

        // for TypeScript projects
        "lint": "eslint . --ext .ts,.tsx",
        "lint:fix": "eslint . --fix --ext .ts,.tsx",
    }
    ```
    Note: Replace `.` after the `eslint` command with the relative path to your code source.
6. Now you can manually lint your code by running `npm run lint` and fiz all fixable issues with `npm run lint:fix`. You probably want your editor to do this though.

## Settings

If you'd like to overwrite eslint or prettier settings, you can add the rules in your `.eslintrc` file. The [ESLint rules](https://eslint.org/docs/rules/) go directly under `"rules"` while [prettier options](https://prettier.io/docs/en/options.html) go under `"prettier/prettier"`. Note that prettier rules overwrite anything in my config (trailing comma, and single quote), so you'll need to include those as well.

```json
{
    "extends": [
        "uandi"
    ],
    "rules": {
        "no-console": 2
    }
}
```

### With VSCode

You should read this entire thing. Serious!

Once you have done one, or both, of the above installs. You probably want your editor to lint and fix for you. Here are the instructions for VS Code:

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the `{}` icon in the top right corner:
    ```js
    "editor.formatOnPaste": false,
    "editor.formatOnSave": true,
    "editor.formatOnType": false,
    // Turn off VSCode auto format, we will do this via eslint
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "[javascriptreact]": {
        "editor.formatOnSave": false
    },
    "[typescript]": {
        "editor.formatOnSave": false
    },
    "[typescriptreact]": {
        "editor.formatOnSave": false
    },
    "[vue]": {
        "editor.formatOnSave": false
    },
    "[html]": {
        "editor.formatOnSave": false
    },
    // enable eslint
    "eslint.enable": true,
    // tell the ESLint plugin to run on save
    "eslint.autoFixOnSave": true,
    // set correct validate settings for each eslint language
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact",
        "vue",
        "html"
    ],
    // Optional BUT IMPORTANT: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already
    "prettier.disableLanguages": ["javascript", "javascriptreact", "typescript", "typescriptreact", "vue", "html"],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    ```

## 🤬🤬🤬🤬 IT'S NOT WORKING

Start fresh. Sometimes global modules can goof you up. This will remove them all.

```
npm remove --global @uandi/eslint-config eslint prettier
```

To do the above for local, omit the `--global` flag.

Then if you are using a local install, remove your `package-lock.json` file and delete the `node_modules/` directory.

Then follow the above instructions again.
