import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa createRoot en lugar de ReactDOM.render
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')); // Usa createRoot
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

