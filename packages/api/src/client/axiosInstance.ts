// packages/api/src/axiosInstance.ts
import axios from 'axios';
import { isNil } from 'es-toolkit';

/**
 * client API axios 인스텁스
 * 클라이언트(=대고객) 사이트에서 사용하는 API 인스턴스입니다.
 */
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080',
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (!isNil(token)) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

/**
 * -------------------------------------------------------------------------------
 **/

/*
 * admin API axios 인스텁스
 * 관리자 사이트에서 사용하는 API 인스턴스입니다.
 */
const axiosAdminInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ADMIN_API_BASE_URL,
  withCredentials: true,
});

/**
 * Request Interceptor (ex. access token)
 * interceptors.request.use를 사용하여 요청을 가로채고, 필요한 경우 헤더에 인증 토큰을 추가할 수 있습니다.
 */
axiosAdminInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_admin_token'); // 또는 쿠키 등
    if (!isNil(token)) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export { axiosInstance, axiosAdminInstance };
