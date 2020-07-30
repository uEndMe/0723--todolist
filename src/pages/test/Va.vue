<template>
  <div class="va">
    va
  </div>
</template>


<script>
export default {
  name: 'va',

  props: {},					//- 父组件参数
  data () { return { a: 'a' } },				//- 数据
  computed: {},				//- 计算属性
  watch: {},					//- 监视

  beforeCreate () {
    console.log('va------beforeCreate')
  },
  created () {
    console.log('va------created')
  },			//- 创造

  beforeMount () {
    console.log('va------beforeMount')
  },
  mounted () {
    console.log('va------mounted')
    console.log('')
  },			//- 完成

  beforeDestroy () {
    console.log('va------beforeDestroy')
  },
  destroyed () {
    console.log('va------destroyed')
    console.log('')
    console.log(this.a)
  },		//- 销毁

  beforeUpdate () {
    console.log('va------beforeUpdate')
  },
  updated () {
    console.log('va------updated')
  },       //- 更新

  activated () {
    console.log('va------activated')
  },
  deactivated () {
    console.log('va------deactivated')
  },  //- 缓存

  methods: {}					//- 方法
}
</script> 

<style lang="stylus" rel="stylesheet/stylus" scoped>
.va
  background-color #eef
</style>