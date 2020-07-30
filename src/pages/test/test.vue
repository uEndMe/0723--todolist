<template>
  <div class="app">
    <section class="test">
      test
      <div class="box">
        box
        <div class="inner">
          inner
          <!-- inner 9999999999999999999999999999999999999999999999999 inner -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import Va from './Va'
// import Vb from './Vb'
export default {
  name: 'test',
  data () {
    return {
    }
  },
  methods: {

  },				//- 方法
  watch: {
  }
}
</script> 

<style lang="stylus" rel="stylesheet/stylus" scoped>
.test
  width 400px
  height 600px
  padding 20px
  background-color #fafafa
  display flex

.box
  flex 1
  display flex
  width 10px
  flex-direction column
  padding 20px
  background-color #eef

.inner
  flex 1
  width 400px
  padding 20px
  background-color #fee
</style>