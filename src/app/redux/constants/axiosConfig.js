import axios from 'axios';

const setAxios = () => {
  axios.defaults.baseURL = '/api';
  axios.defaults.headers.common['Content-Type'] = 'application/json';

  axios.interceptors.request.use((config) => {
    if (localStorage.authToken) config.headers.Authorization = `Bearer ${localStorage.authToken}`;
    return config;
  },
  (error) => Promise.reject(error));
};

export default setAxios;
