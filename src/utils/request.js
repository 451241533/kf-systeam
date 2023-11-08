import axios from 'axios';

const request = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,  // 请求超时时间
});

// 请求拦截器
request.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么，比如添加token到请求头
    // config.headers.Authorization = 'Bearer ' + getToken();
    // return config;
  },
  error => {
    // 处理请求错误
    console.log(error);
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  response => {
    // 响应数据处理，比如处理错误码
    const data = response.data;
    if (data.code !== 0) {
      return Promise.reject(new Error(data.message || '请求失败'));
    }
    return data.data;
  },
  error => {
    // 处理响应错误
    console.log(error);
    return Promise.reject(error);
  }
);


export function get(url, params) {
return request.get(url, { params });
}

// 封装post请求
export function post(url, data) {
  return request.post(url, data);
}

// 封装put请求
export function put(url, data) {
  return request.put(url, data);
}

// 封装delete请求
export function del(url, params) {
  return request.delete(url, { params });
}
