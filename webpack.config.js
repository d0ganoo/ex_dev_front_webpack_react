const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
require("babel-polyfill");

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ['env','react','es2015',"stage-0"]
				}
			},
			{
				test: /\.(scss|css)$/,

				use: [
					{
						loader: 'style-loader'
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
    new UglifyJSPlugin()
	],
	
	entry: ['babel-polyfill', './src/index.js']
	,

	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'cheap-module-eval-source-map',

	mode: 'development'
};
