import { debounce } from './index'
let storage = {}

/**
 * 读取存储
 * @param {string} key 键
 * @return {object} 数据对象
 */
storage.get = function (key) {
  return JSON.parse(localStorage.getItem(key))
}

/**
 * 持久存储
 * 延时一秒存储
 * @param {string} key 键
 * @param {object} val json对象
 */
storage.set = function (key, val) {
  debounce(() => {
    localStorage.setItem(JSON.stringify(key, val))
  }, 1000)
}

export default storage;