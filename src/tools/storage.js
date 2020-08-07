let storage = {}

// 读取本地仓库
storage.get = function (key) {
  return JSON.parse(localStorage.getItem(key))
}

// 存入本地仓库
storage.set = function (key, val) {
  localStorage.setItem(key, JSON.stringify(val))
}

export default storage;