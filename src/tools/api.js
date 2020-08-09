
// 是否响应成功
export const isFulfilled = function (response) {
  return response?.status >= 200 && response?.status < 300
}
