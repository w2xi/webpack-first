const path = require('path');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const config = smp.wrap({
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'webpack-numbers.js',
    path: path.resolve(__dirname, 'dist'),
    globalObject: 'this',
    library: {
      name: 'webpackNumbers',
      type: 'umd',
    },
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
})

module.exports = config