<template>
  <div>
    Axios
    <input
      type="text"
      v-model="str"
    >
    <button @click="search(str)">发送请求</button>
    <button @click="xx(str)">发送xx</button>
    <button @click="all(str)">发10次</button>
  </div>
</template>

<script>
import { search, xx } from '../api/index'
const apiSearch = search
const apixx = xx
export default {
  name: 'home-axios',
  data () {
    return {
      str: ''
    }
  },
  methods: {
    search (str) {
      const options = {
        data: str,
        pending () {
          console.log('开始发送请求~')
        },
        fulfilled ({ data }) {
          console.log(data)
        },
        reject (err) {
          console.log(err)
        }
      }
      apiSearch(options)
    },
    xx (str) {
      const options = {
        data: str,
        pending () {
          console.log('开始发送请求~')
        },
        fulfilled ({ data }) {
          console.log(data)
        },
        reject (err) {
          console.log(err)
        }
      }
      apixx(options)
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
