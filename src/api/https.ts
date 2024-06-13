/* eslint-disable no-alert */
import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { getToken, setToken, removeToken } from '@/store/authStore';

const BASE_URL = 'http://localhost:8080';

const createClient = (axiosConfig?: AxiosRequestConfig): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    ...axiosConfig,
  });

  axiosInstance.interceptors.request.use(
    (requestConfig) => {
      const accessToken = getToken();
      if (accessToken) {
        // eslint-disable-next-line no-param-reassign
        requestConfig.headers.Authorization = `Bearer ${accessToken}`;
      } else {
        // eslint-disable-next-line no-param-reassign
        delete requestConfig.headers.Authorization;
      }
      return requestConfig;
    },
    (err) => Promise.reject(err),
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      const newAccessToken = response.headers.authorization;
      if (newAccessToken) {
        const token = newAccessToken.split(' ')[1];
        setToken(token);
      }
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        removeToken();
        if (window.confirm(error.response.data.message)) {
          window.location.href = '/login';
        } else {
          window.location.href = '/';
        }
      } else if (error.response.status === 403) {
        window.alert('이 페이지에 대한 접근 권한이 없습니다.');
        window.location.href = '/';
      } else if (error.response.status === 400) {
        window.alert(error.response.data.message);
        console.error(error);
      } else if (error.response.status >= 500) {
        window.alert(
          '서버에 문제가 발생했습니다.\n잠시 후에 다시 시도해주세요.',
        );
        console.error(error);
      }
      return Promise.reject(error);
    },
  );

  return axiosInstance;
};
// eslint-disable-next-line import/prefer-default-export
export const httpClient = createClient();
