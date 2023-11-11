import axios from 'axios';

const request = axios.create({
  timeout: 5000, 
});

// 请求拦截器
request.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('AUTH-CODE')}`;
    return config;
  },
  error => {
    // 处理请求错误
    console.error('请求错误:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  response => {
    const data = response.data;
    if (data.error !== 0) {
      return Promise.reject(new Error(data.message || '请求失败'));
    }
    return data;
  },
  error => {
    console.error('响应错误:', error);
    return Promise.reject(error);
  }
);

// 封装GET请求
export function get(url, params) {
  return request.get(url, { params });
}

// 封装POST请求
export function post(url, data) {
  return request.post(url, data);
}

