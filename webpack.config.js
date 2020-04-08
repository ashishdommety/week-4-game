const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.[contentHash].js",
    path: path.resolve(__dirname + "/build"),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  devServer: {
    contentBase: "./build",
    hot: true,
    port: 9000,
  },
  plugins: [new HtmlWebPackPlugin({ template: "./src/index.html" })],
};
