const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require("vue-loader")

module.exports = {
	entry: './src/index.js',
	output: {
		filename: '[name].js',
		path: path.join(__dirname, "./dist"),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						},
					},
				]
			},
			{
				test: /\.s[ac]ss/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.css$/,
				use: [
					(process.env.NODE_ENV === 'development' ? 
						'style-loader' :
						 MiniCssExtractPlugin.loader
					),
					'css-loader',
					{
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                // 添加 autoprefixer 插件
                plugins: [require("autoprefixer")],
              },
            },
          },
				],
			},
			{
				test: /\.vue$/,
				use: ['vue-loader'],
			},
			{ test: /\.ts$/, use: ["ts-loader"] },
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	],
}