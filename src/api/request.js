import axios from "axios";

const instance = axios.create({
  baseURL: "http://114.115.176.252:8081",
  timeout: 30000,
  transformRequest: [function(data, headers) {
    // 对发送的 data 进行任意转换处理
    return data;
  }],
  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function(data) {
    // 对接收的 data 进行任意转换处理
    if (typeof data === "string"){
      return JSON.parse(data)
    }
    return data;
  }]
});

export const getFunc = (options) => {
  return instance({
    method: "get",
    url: options.url,
    data: options.data
  });
};

export const postFunc = (options) => {
  return instance({
    method: "post",
    url: options.url,
    data: options.data
  });
};

// 添加请求拦截器
instance.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  return config;
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function(response) {
  // 对响应数据做点什么
  return response;
}, function(error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
