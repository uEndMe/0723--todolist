import axios from 'axios'
// import qs from 'qs'

const baseURL = ""
const myAxios = axios.create({
  baseURL
})

// 请求拦截器
myAxios.interceptors.request.use(config => {
  /* const { method, data } = config
  // post 编码
  method.toUpperCase() === 'POST'
    && data instanceof Object
    && (config.data = qs.stringify(data)) */
  return config
})

// 响应拦截器
let errCode = {
  '401': '权限不足',
  '403': '禁止访问',
  '404': '资源丢失',
  '500': '系统繁忙',
  'bug': '未知错误'
}
myAxios.interceptors.response.use(ok => ok, error => {
  // 失败
  const code = error.status || 'bug'
  return errCode[code]
})

export default myAxios;
