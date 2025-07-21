const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const plugins = [
  new HtmlWebpackPlugin({ template: 'public/index.html' }),
];

if (process.env.NODE_ENV !== 'production') {
  const Dotenv = require('dotenv-webpack');
  plugins.push(new Dotenv());
}

plugins.push(
  new webpack.DefinePlugin({
    'process.env.REACT_APP_PORT': JSON.stringify(process.env.REACT_APP_PORT || ''),
    'process.env.REACT_APP_API_BASE_URL': JSON.stringify(process.env.REACT_APP_API_BASE_URL || ''),
  })
);

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    publicPath: '/',
  },
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      { test: /\.[jt]sx?$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.svg$/, use: '@svgr/webpack' },
    ],
  },
  plugins,
  devServer: {
    port: 3001,
    historyApiFallback: true,
    hot: true,
  },
};
