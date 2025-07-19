const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Cleans dist on rebuild
  },
  module: {
    rules: [
      // JS and JSX Loader
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // CSS Loader
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // SVG Loader
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Optional file extensions
    // alias: {
    //     'react-dom': 'react-dom/client'  // Important for React 19
    //   }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new Dotenv(), // Injects environment variables
  ],
  devServer: {
    static: { directory: path.join(__dirname, 'public') },
    port: 4000,
    open: true,
    historyApiFallback: true,
    hot: true,
  },
};
