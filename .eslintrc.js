module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
      "react-app", // Uses the recommended rules Create React App
      "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
      "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
      "plugin:prettier/recommended", // Should be last in the list. Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true, // Allows for the parsing of JSX
      },
      ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
      sourceType: "module", // Allows for the use of imports
    },
    rules: {
      "prop-types": "off",
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/camelcase": "off",
      "prettier/prettier": [
        "warn",
        {
          endOfLine: "auto",
        },
      ],
    },
    settings: {
      react: {
        version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
      },
    },
  };