<template>
  <div class="test">
    test
    <button @click="part = part === 'Va' ? 'Vb' : 'Va'">切换组件</button>
    <component :is="part"></component>
    <button @click="a=false"></button>
    <Va v-if="a" />
    <div :xx="say()"></div>
    <form
      action="###"
      method="GET"
    >
      <input
        type="text"
        v-model.number="i"
      >
    </form>
  </div>
</template>


<script>
import Va from './Va'
import Vb from './Vb'
export default {
  name: 'test',
  data () {
    return {
      part: 'Vb',
      a: true,
      b: 'b',
      c: 'c',
      aa: 0,
      i: 1
    }
  },
  components: { Va, Vb },
  beforeCreate () {
    console.log('------beforeCreate')
  },
  created () {
    console.log('------created')
  },			//- 创造

  beforeMount () {
    console.log('------beforeMount')
  },
  mounted () {
    console.log('------mounted')
    console.log('')
  },			//- 完成

  beforeDectroy () {
    console.log('------beforeDectroy')
  },
  destroyed () {
    console.log('------destroyed')
  },		//- 销毁

  beforeUpdate () {
    console.log('------beforeUpdate')
  },
  updated () {
    console.log('------update')
  },       //- 更新

  activated () {
    console.log('------activated')
  },
  deactivated () {
    console.log('------deactivated')
  },  //- 缓存

  methods: {
    say () {
      // console.log('编译: ' + this.part)
      // return this.part
    }
  },				//- 方法
  watch: {
    /* part (val, oldVal) {
      console.log('监视：' + oldVal + '-->' + val)
    } */
  }
}
</script> 
<style>
.testbox {
  display: flex;
}
.testa {
  flex: 1;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>


<style lang="stylus" rel="stylesheet/stylus" scoped>
.test
  background-color #fafafa
</style>