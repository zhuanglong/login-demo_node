import axios from 'axios';

const service = axios.create({
  baseURL: 'http://location:3000/api',
  withCredentials: true,
  timeout: 5000
});

service.interceptors.request.use(
  (config) => {
    // 不传递默认开启 loading
    if (config.hideLoading) {
      // loading
    }
    const token = window.localStorage.getItem('token');
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    console.log(`request: ${error}`);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    // hide loading
    const res = response.data;
    if (res.status && res.status !== 200) {
      if (res.status === 401) {
        // 退出登录
      }
      return Promise.reject(res || 'error');
    } else {
      return Promise.resolve(res);
    }
  },
  (error) => {
    // hide loading
    console.log(`response: ${error}`);
    return Promise.reject(error);
  }
);

export default service;
