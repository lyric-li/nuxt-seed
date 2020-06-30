module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "@nuxtjs",
    "plugin:nuxt/recommended",
  ],
  plugins: [
  ],
  globals: {
    importScripts: true,
    workbox: true,
  },
  // add your custom rules here
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "quotes": ["error", "double", { "allowTemplateLiterals": true }],
    "quote-props": ["error", "consistent"],
    "semi": ["error", "always"],
  },
};
