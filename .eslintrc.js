module.exports = {
  extends: "divid",
  parserOptions: {
    project: "./packages/tsconfig.settings.json",
  },
  plugins: ["import"],
  rules: {
    "import/no-extraneous-dependencies": "error",
  },
};
