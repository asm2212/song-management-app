# Song Management App

## Overview

This project is a React-based web app for managing a songs list. It provides functionalities such as listing, editing, deleting songs, pagination, and smooth UI/UX enhancements.

---

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/asm2212/song-management-app.git
   cd song-management-app
   ```

2. **Install dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or yarn:

   ```bash
   yarn install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000` by default.

4. **Build for production**

   ```bash
   npm run build
   ```

   This generates optimized assets in the `dist/` directory.

---

## Webpack Configuration Explained

Our project uses **Webpack 5** as the module bundler to efficiently bundle and serve the React app with hot-reloading and optimized builds.

### Key points of the Webpack setup:

* **Entry point:** `src/index.jsx` is the main entry where the React app boots.

* **Output:** Bundled assets are output to the `dist/` folder, with content hashing to support long-term caching.

* **Loaders:**
  * `babel-loader` transpiles modern JS/JSX syntax to browser-compatible JS.
  * `style-loader` and `css-loader` handle styles.
  * `file-loader` or `asset modules` handle static assets like images and fonts.

* **Plugins:**
  * `HtmlWebpackPlugin` automatically injects the JS bundle into the `index.html`.
  * `HotModuleReplacementPlugin` enables hot reloading during development.

* **Development mode:**
  * Source maps are enabled for better debugging.
  * Dev server runs with live reload and HMR on `localhost:3000`.

* **Production mode:**
  * JS and CSS assets are minified and optimized.
  * Content hashes in filenames enable effective cache busting.

### Example snippet of `webpack.config.js` for reference:

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[contenthash].js',
    clean: true,
  },
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      // Additional loaders for CSS, assets, etc.
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    static: './dist',
    hot: true,
    open: true,
    port: 3000,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
```

---

## AI Usage Explanation

This project leverages AI capabilities **via OpenAI's GPT-4 model** for:

* **Code generation and refactoring:** To speed up development and maintain clean, optimized code.
* **UX improvements:** Suggesting UI/UX best practices based on AI recommendations.
* **Documentation assistance:** Generating and improving project documentation, comments, and explanations.

The AI integration is **external to the application runtime** and used solely as a developer productivity tool during development.

---

## Contact / Support

For questions or support, please open an issue or contact the maintainer at [asm2212](https://github.com/asm2212).
