let arr = {}

/**
 * 反向遍历
 * @param {array} arr 伪数组 
 * @param {function} cb 回调
 */
arr.forEachRight = function (arr, cb) {
  let temp = arr.length
  while (temp--) {
    cb(arr[temp], temp)
  }
}

export default arr;