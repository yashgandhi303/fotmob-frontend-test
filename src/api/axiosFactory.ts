import axios, { AxiosInstance } from 'axios';
import { handleApiError } from '../utils/errorHandler';

const createAxiosInstance = (baseURL: string, timeout = 5000): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL,
    timeout,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      const handledError = handleApiError(error);
      console.error('API call failed:', handledError?.message || error.message);
      return Promise.reject(handledError);
    }
  );

  return axiosInstance;
};

export default createAxiosInstance;
