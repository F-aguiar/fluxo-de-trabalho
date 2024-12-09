// src/api/axios.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',  // A URL do seu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
