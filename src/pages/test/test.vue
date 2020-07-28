<template>
  <div class="test">
    test
    <Va />
    <Vb />
    <div class="testbox">
      <div class="testa">sss</div>
    </div>
    <navv />

  </div>
</template>


<script>
import Va from './Va'
import Vb from './Vb'
export default {
  name: 'test',
  data () {
    return {
      isCollapse: true
    }
  },
  components: { Va, Vb },
  methods: {
    test () {
      console.log('test')
    }, handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
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