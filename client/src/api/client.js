import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api',
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error.response?.data || 'Unexpected Error');
  }
);

export default client;
