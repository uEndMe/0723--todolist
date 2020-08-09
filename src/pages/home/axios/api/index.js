import { ajaxGet, ajaxPost } from '../ajaxProxy.js'

export const search = ajaxGet('/getJoke')


export const xx = ajaxPost('/getJoke', {
  needToken: true,
  headers: {
  },
  data: {
  }
})