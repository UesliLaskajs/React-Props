import React from 'react';
import { createRoot } from 'react-dom'; // Correct import statement
import App from './App';



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
