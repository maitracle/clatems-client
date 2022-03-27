import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { toast } from 'react-toastify'
import { removeAuthToken } from './tokenHandler'


axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    switch (error.response?.status) {
      case 401:
        removeAuthToken()
        window.location.assign('/sign')
        break
      default:
        break
    }

    if (error.response) {
      handleToast(error.response)
    }

    return Promise.reject(error.response)

  },
)

export interface RequestConfig extends AxiosRequestConfig {
  'axios-retry'?: {
    retries: number
  };
}

export function request(config: RequestConfig) {
  config.headers = {
    'Content-Type': 'application/json',
    ...config.headers,
  }

  config.baseURL = `${process.env.REACT_APP_API_SERVER_URL}`
  return axios(config)
}

export function handleToast(e: AxiosResponse) {
  const { message } = e?.data ?? {}
  if (message) {
    toast.dark(message)
  }
}
