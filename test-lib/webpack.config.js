const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist"),
    globalObject: 'this',
    library: {
      name: '_',
      type: 'umd',
    },
  },
  devtool: 'source-map',
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader ,'css-loader'],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
};