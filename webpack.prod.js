const common = require("./webpack.common");
const merge = require("webpack-merge");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "index.[contentHash].js",
    path: path.resolve(__dirname + "/build"),
  },
  plugins: [new CleanWebpackPlugin()],
});
