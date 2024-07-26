/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: "@typescript-eslint/parser",
  ignorePatterns:[
    "node_modules/",
    "dist/",
    "build/",
  ],
  plugins: ["json", "require-path-exists", "@typescript-eslint"],
}