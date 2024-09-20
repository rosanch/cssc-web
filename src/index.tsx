import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/Index.css'; // Importing CSS file if present
import App from './App'; // Importing App component

// Rendering the root React component into the DOM
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
