/**
 * 填充
 * @param {object} obj 操作对象 
 * @param {any} val 填充的值
 */
export let fill = function (obj, val) {
  Object.keys(obj).forEach(key => {
    obj[key] = val
  })
}
