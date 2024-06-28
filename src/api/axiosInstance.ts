import axios from 'axios';
import { handleApiError } from '../utils/errorHandler';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  timeout: 5000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const handledError = handleApiError(error);
    console.error('API call failed:', handledError?.message);
    return Promise.reject(handledError);
  }
);

export default axiosInstance;
