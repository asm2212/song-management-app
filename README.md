# Song Management App

## Overview

**Song Management App** is a full-stack application for managing a list of songs. It provides a user-friendly interface for listing, adding, editing, and deleting songs, with pagination and smooth UI/UX enhancements. The app is split into a React frontend and a Node.js/Express backend, managed as a monorepo.

---

## Monorepo Structure

This project uses a monorepo structure with two main directories:

- `client/` – React frontend (Webpack, runs on port 3001 for development)
- `server/` – Node.js backend (Express, runs on port 5000)

```
song-management-app/
│
├── client/   # React frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── webpack.config.js
│
├── server/   # Node backend
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/asm2212/song-management-app.git
cd song-management-app
```

### 2. Backend Setup (`server`)

```bash
cd server
npm install
npm run dev
# The server will start at http://localhost:5000
```

- The backend is an Express.js server.
- By default, it runs on **port 5000**.
- API endpoints are used by the frontend for CRUD operations on songs.

### 3. Frontend Setup (`client`)

Open a new terminal window/tab in the project root and run:

```bash
cd client
npm install
npm start
# The React app will start at http://localhost:3001
```

- The frontend is a React app bundled with Webpack.
- By default, it runs on **port 3001**.  
- The Webpack dev server proxies API requests to the backend (update API URLs if needed).

---

## Webpack Configuration (Frontend)

The React frontend uses **Webpack 5** for bundling and development.

### Key features:

- **Entry Point:** `src/index.jsx`
- **Output:** Bundled assets are output to `dist/`, with content hashing for cache busting.
- **Loaders:**  
  - `babel-loader` for modern JS/JSX
  - `style-loader` and `css-loader` for CSS
  - Asset modules for images/fonts
- **Plugins:**  
  - `HtmlWebpackPlugin` injects the bundle into `public/index.html`
  - `HotModuleReplacementPlugin` for fast refresh in development
- **Dev Server:**  
  - Runs on `localhost:3001` with HMR (hot module replacement)
  - Serves static files, falls back to `index.html` for SPA routes

#### Example `webpack.config.js` snippet:

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
    port: 3001,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
```

---

## Running the App

1. **Start the backend:**

    ```bash
    cd server
    npm install
    npm run dev
    # Server: http://localhost:5000
    ```

2. **Start the frontend:**

    ```bash
    cd client
    npm install
    npm start
    # Frontend: http://localhost:3001
    ```

3. **Open your browser to** [http://localhost:3001](http://localhost:3001)

- Make sure both the backend and frontend are running for full functionality.
- The frontend is configured to communicate with the backend API on port 5000.

---

## AI Usage Explanation

This project leverages AI capabilities **via OpenAI's GPT-4 model** for:

- **Code generation and refactoring:** To speed up development and maintain clean, optimized code.
- **UX improvements:** Suggesting UI/UX best practices based on AI recommendations.
- **Documentation assistance:** Generating and improving project documentation, comments, and explanations.

> **Note:** The AI integration is **external to the application runtime** and used solely as a developer productivity tool during development.

---

## License

MIT

---

## Contact / Support

For questions or support, please open an issue or contact the maintainer at [asm2212](https://github.com/asm2212).
