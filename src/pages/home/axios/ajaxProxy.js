import myAxios from './interceptors.js'

/**
 * 配置 请求代理
 * @param {string} path 路径
 * @return {async function} 请求代理 get
 */
export let ajaxGet = function (path) {
  /**
   * 请求代理 get
   * @param {object} params 查询字符串对象
   * @return {any} res 响应结果
  */
  return async function (params) {
    try {
      return await myAxios.get(
        path, { params }
      )
    } catch{
      return '未知错误' // 代码崩溃
    }
  }
}


/**
 * 配置 请求代理
 * @param {object} config 配置对象
 * @return {async function} 请求代理 get
 */
export let ajaxPost = function (path, config) {
  /**
   * 请求代理 post
   * @param {string | object} data 请求主体
   * @return {any} res 响应结果
  */
  return async function (data) {
    if (config?.needToken) {
      const token = 'token'  // 引入token
      if (!token) return '请先登录'
      delete config.needToken
      config.headers.authorization = token
    }
    try {
      return await myAxios.post(
        path, data, config
      )
    } catch{
      return '未知错误' // 代码崩溃
    }
  }
}
