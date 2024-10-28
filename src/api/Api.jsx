import axios from 'axios';

// Create an Axios instance with your API base URL
const api = axios.create({
  baseURL: 'http://localhost:5173/api',
});

// Request interceptor to add headers or log requests
api.interceptors.request.use(
  (config) => {
    // config.headers['Authorization'] = `Bearer ${token}`;
    console.log('Request made with ', config);
    return config;
  },
  (error) => {
    console.error('Request error: ', error);
    return Promise.reject(error);
  }
);

// Response interceptor to handle responses
api.interceptors.response.use(
  (response) => {
    console.log('Response received: ', response);
    return response;
  },
  (error) => {
    console.error('Response error: ', error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

export default api;
