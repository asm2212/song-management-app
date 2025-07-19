import React from 'react';
import { createRoot } from 'react-dom/client';  // Yes, still use /client in React 19
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);