module.exports = {
  entry: "./public/javascript/index.js",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  output: {
    filename: "index.js",
    path: __dirname + "/build",
  },
};
