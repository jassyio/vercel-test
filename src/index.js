import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import ThemeProvider from './theme'; // Adjust import based on your folder structure

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
