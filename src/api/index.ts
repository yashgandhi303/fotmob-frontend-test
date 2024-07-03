import createAxiosInstance from './axiosFactory';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001/';
const FOTMOB_URL = process.env.REACT_APP_FOTMOB_API || 'http://localhost:8002';

export const axiosInstance = createAxiosInstance(BACKEND_URL);
export const fotmobApiInstance = createAxiosInstance(FOTMOB_URL, 10000);
