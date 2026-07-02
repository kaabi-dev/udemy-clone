import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true, // only if using cookies/sessions
});

export default axiosInstance;
