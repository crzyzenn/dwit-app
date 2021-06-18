module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // 0 - off, 1 - warning, 2 - error...
    // Define....what gives us errors, what gives us warnings....
    "no-unused-vars": 1,
    "react/prop-types": 0,
    "react/display-name": 0,
  },
};
