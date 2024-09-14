const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	entry: path.resolve(__dirname, '../src/index.tsx'),
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, process.env.NODE_ENV === 'production' ? '../build' : '../dist'),
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	module: {
		rules: [
			{
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, '../tsconfig/tsconfig.json'),  // Ensure the correct path
          },
        },
        exclude: /node_modules/,
      },
			{
        test: /\.less$/,
        use: [
          process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,  // Rule to handle image files
        type: 'asset/resource',  // Webpack 5 built-in asset module
      },
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../index.html'),
		}),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, '../src/images/favicon.png'), to: 'favicon.png' },
        { from: path.resolve(__dirname, '../src/404.html'), to: '404.html' }, 
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    // new BundleAnalyzerPlugin(), // Uncomment to analyze the bundle
	],
};
