
// 读取本地仓库
export let getStorage = function (key) {
  return JSON.parse(localStorage.getItem(key))
}

// 存入本地仓库
export let setStorage = function (key, val) {
  localStorage.setItem(key, JSON.stringify(val))
}


