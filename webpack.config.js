const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ['env','react']
				}
			},
			{
				test: /\.(scss|css)$/,

				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',

						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',

						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
	      template: './src/index.html',
	      filename: './index.html'
    }),
    new UglifyJSPlugin(),
    new MiniCssExtractPlugin({filename: 'bundle.css.[chunkhash].css'})
	],

	entry: {
		index: './src/index.js'
	},

	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'inline-source-map',

	mode: 'production'
};
