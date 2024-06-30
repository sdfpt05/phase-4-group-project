// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000';  

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;

