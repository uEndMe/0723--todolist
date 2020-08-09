<template>
  <div>
    Axios

    <button @click="search(str)">get请求</button>
    <br>
    <button @click="xx(str)">post请求</button>
    <button @click="all(str)">发10次</button>
  </div>
</template>

<script>
import { search, xx } from './api/index'
import { isFulfilled } from '@tools/api'
const apiSearch = search
const apixx = xx
export default {
  name: 'home-axios',
  data () {
    return {
      // str: "page=1&count=2&type=video",
      str: { page: 1, count: 2, type: 'video' },
      state: { init: true }
    }
  },
  methods: {
    async search (data) {
      // 发起请求
      this.state = { loading: true }
      const res = await apiSearch(data)
      // 响应结果
      if (isFulfilled(res)) {
        this.state = { loaded: true }
        console.log(res.data)
      } else {
        this.state = { err: true }
        console.log(res)
      }

    },
    async xx (data) {

      // 发起请求
      this.state = { loading: true }
      const res = await apixx(data)

      // 响应结果
      this.loading = false
      if (isFulfilled(res)) {
        this.state = { loaded: true }
        console.log(res.data)
      } else {
        this.state = { err: true }
        console.log(res)
      }

    },
    all () {
      let i = 10
      while (i--) {
        this.search('111')
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped></style>
