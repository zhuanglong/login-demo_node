import axios from 'axios';

const service = axios.create({
  baseURL: '/', // 如果使用了代理，请设置成'/'
  withCredentials: true,
  timeout: 5000
});

// request 拦截器
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
    console.log('=== request err === ' + error);
    return Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  (response) => {
    // hide loading
    const res = response.data;
    if (res.status && res.status !== 200) {
      if (res.status === 401) {
        // 退出登录
      }
      return Promise.reject(res);
    } else {
      return Promise.resolve(res);
    }
  },
  (error) => {
    // hide loading
    console.log('=== response err === ' + error);
    return Promise.reject(error);
  }
);

export default service;
