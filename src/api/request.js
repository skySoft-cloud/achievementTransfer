import axios from 'axios'
import { baseUrl } from '@/api/config'
import store from '@/store/index'
import { Notification } from 'element-ui'

const token = localStorage.getItem('token')
axios.defaults.headers['Authorization'] = token || store?.state?.userInfo?.token
const instance = axios.create({
  baseURL: baseUrl,
  // headers: {
  //   'X-Access-Token': store.state.userInfo.token
  // },
  timeout: 30000,
  // transformRequest: [function(data, headers) {
  //   // 对发送的 data 进行任意转换处理
  //   return data;
  // }],
  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对接收的 data 进行任意转换处理
    if (typeof data === 'string') {
      return JSON.parse(data)
    }
    return data
  }]
})

export const getFunc = (options) => {
  return instance.get(options.url, {
    params: options.data
  })
}

export const postFunc = (options) => {
  return instance.post(options.url, options.data)
}

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  console.log(response)
  if (response.data.code === 412) {
    Notification({
      title: '失败',
      message: response.data.message,
      type: 'error'
    })
  }
  if (response.data.code === 500) {
    Notification({
      title: '失败',
      message: response.data.message,
      type: 'error'
    })
  }
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
