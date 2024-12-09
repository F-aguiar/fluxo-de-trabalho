// src/index.js (ou index.tsx)
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Verifique se a aplicação está sendo montada corretamente no elemento com id 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Função para medir a performance (não obrigatória)
reportWebVitals();
