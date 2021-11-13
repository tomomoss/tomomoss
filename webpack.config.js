const path = require("path");

module.exports = {
  entry: "./src/main.ts",
  experiments: {
    outputModule: true
  },
  mode: "production",
  module: {
    rules: [{
      test: /\.ts$/,
      use: ["ts-loader"]
    }]
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts"]
  }
};
