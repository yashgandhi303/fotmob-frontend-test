import { AxiosError } from 'axios';
import { FetchError } from '../types';

const getErrorMessage = (statusCode: number): string => {
  switch (statusCode) {
    case 400:
      return '400: Bad Request. Please check your input.';
    case 401:
      return '401: Unauthorized. Please log in.';
    case 403:
      return '403: Forbidden. You do not have permission to access this resource.';
    case 404:
      return '404: Not Found. The requested resource could not be found.';
    case 500:
      return '500: Internal Server Error. Please try again later.';
    default:
      return 'An unexpected error occurred. Please try again.';
  }
};

export const handleApiError = (error: AxiosError): FetchError => {
  if (error.response) {
    const message = getErrorMessage(error.response.status);
    return {
      message,
      statusCode: error.response.status,
    };
  }

  return {
    message: error.message || 'An unexpected error occurred',
  };
};
