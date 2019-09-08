module.exports = {
  extends: "divid",
  parserOptions: {
    project: "./tsconfig.settings.json"
  },
  plugins: ["import"],
  rules: {
    "import/no-extraneous-dependencies": "error"
  }
};
