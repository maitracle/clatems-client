import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { stringify } from 'query-string';
import { camelizeKeys, decamelize, decamelizeKeys } from 'humps';
import { toast } from 'react-toastify';
import { removeAuthToken } from './tokenHandler';


axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    switch (error.response?.status) {
      case 401:
        removeAuthToken();
        window.location.assign('/sign');
        break;
      default:
        break;
    }

    if (error.response) {
      handleToast(error.response);
    }

    return Promise.reject(error.response);

  },
);

// axios.defaults.timeout = 5000;

export interface RequestConfig extends AxiosRequestConfig {
  'axios-retry'?: {
    retries: number
  };
}

const decamelizeThatDontBreaksFile = (object: any): any => {
  if (object && !(object instanceof File)) {
    if (object instanceof Array) {
      return object.map((item) => decamelizeThatDontBreaksFile(item));
    }
    if (object instanceof FormData) {
      let formData = new FormData();
      for (const [key, value] of object.entries()) {
        formData.append(decamelize(key), value);
      }
      return formData;
    }
    if (typeof object === 'object') {
      return Object.keys(object).reduce(
        (acc, next) => ({
          ...acc,
          [decamelize(next, { split: /(?=[A-Z0-9])/ })]: decamelizeThatDontBreaksFile(object[next]),
        }),
        {},
      );
    }
  }
  return object;
};

export function request(config: RequestConfig) {
  config.headers = {
    'Content-Type': 'application/json',
    ...config.headers,
  };

  config.baseURL = `${process.env.REACT_APP_API_SERVER_URL}`;
  config.transformResponse = [...axios.defaults.transformResponse, (data) => camelizeKeys(data)];
  config.transformRequest = [decamelizeThatDontBreaksFile, ...axios.defaults.transformRequest];
  config.paramsSerializer = function(params) {
    return stringify(decamelizeKeys(params));
  };
  return axios(config);
}

export function handleToast(e: AxiosResponse) {
  const { message } = e?.data ?? {};
  if (message) {
    toast.dark(message);
  }
}
