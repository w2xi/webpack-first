const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    // another: './src/another-module.js',
    // main: {
    //   import: './src/index.js',
    //   dependOn: 'shared'
    // },
    // another: {
    //   import: './src/index.js',
    //   dependOn: 'shared',
    // },
    // shared: 'lodash',
  },
  // devtool: 'inline-source-map',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      // chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    }
  },
  // devServer: {
  //   static: './dist'
  // },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: ['style-loader', 'css-loader']
  //     },
  //     {
  //       test: /\.(png|svg|jpg|jpeg|gif)/i,
  //       type: 'asset/resource'
  //     },
  //     {
  //       test: /\.(woff|woff2|eot|ttf|otf)$/i,
  //       type: 'asset/resource',
  //     },
  //     {
  //       test: /\.(csv|tsv)$/i,
  //       use: ['csv-loader'],
  //     },
  //     {
  //       test: /\.xml$/i,
  //       use: ['xml-loader']
  //     }
  //   ],
  // },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Caching',
    }),
    new WebpackManifestPlugin()
  ]
}