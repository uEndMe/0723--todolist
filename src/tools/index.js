
/**
 * 防抖
 * 事件延时执行。延时时间内再次触发的，重新计时
 * @param {function} cb 回调
 * @param {number} delay 延时时间
 * @return function
 */
export let debounce = function (cb, delay) {
  let id = null
  return function (...rest) {
    clearTimeout(id)
    id = setTimeout(() => {
      cb.call(this, ...rest)
    }, delay)
  }
}

/**
 * 节流
 * 禁止一段时间内的再次触发。
 * @param {function} cb 回调
 * @param {number} interval 间隔时间
 * @return function
 */
export let throttle = function (cb, interval) {
  let state = true
  return function (...rest) {
    if (!state) return
    state = false
    cb.call(this, ...rest)
    setTimeout(() => {
      state = true
    }, interval)
  }
}
