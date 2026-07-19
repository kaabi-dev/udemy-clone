import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  // withCredentials: true, // only if using cookies/sessions
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = JSON.parse(sessionStorage.getItem('accessToken')) || '';

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;
