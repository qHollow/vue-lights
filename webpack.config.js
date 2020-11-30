const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/main.js'),
    },
	output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
	mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
	plugins: [
        new HtmlWebpackPlugin({
            title: 'Vue test',
            template: path.resolve(__dirname, './src/template.html'), 
            filename: 'index.html', 
        }),
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new VueLoaderPlugin(),
    ],
	module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
			//CSS
			{
                test: /\.(scss|css)$/,
                use: ['vue-style-loader', 'style-loader', 'css-loader'],
            },
			//Vue
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
        ],
    },
	resolve: {
		alias: {
		  'vue$': 'vue/dist/vue.esm.js' 
		}
	}
}