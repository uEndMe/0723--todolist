import myAxios from './interceptors.js'
// import qs from 'qs'

const urlBase = 'https://api.apiopen.top/getJoke?page=1&count=2&type=video'
/**
 * 请求 生命周期
 * @param {string} path 路径
 * @return {function} 参数+生命周期
 */
export let ajaxGet = function (path) {
  return async function (options = {}) {  // 生成请求
    const { data, pending, fulfilled, reject } = options

    // 请求阶段 ----
    pending?.()

    // 发请求
    let res = await myAxios.get(
      urlBase + path, { params: data }
    )

    // 响应阶段 ----
    if (res.status >= 200 && res.status < 300) {
      fulfilled?.(res)
    } else {
      reject?.(res)
    }
  }
}

/**
 * 请求 生命周期
 * @param {object} config 配置对象
 * @return {function} 参数+生命周期
 */
export let ajaxPost = function (config = {}) {
  return async function (options = {}) {  // 生成请求
    const { data, pending, fulfilled, reject } = options

    // 请求阶段 ----
    pending?.()
    // 需要 token
    if (config?.headers?.needToken) {
      const token = '引入token'
      if (!token) return reject({ status: 401 })
      config.headers.authorization = token
    }

    // 发请求
    const { url } = config
    let res = await myAxios.post(
      urlBase + url, data, config
    )

    // 响应阶段 ----
    if (res.status >= 200 && res.status < 300) {
      fulfilled?.(res)
    } else {
      reject?.(res)
    }
  }
}
