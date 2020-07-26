<template>
  <div class="home">
    <VHeader class="header" />
    <section class="main">
      <VNav />
      <router-view class="content" />
    </section>
    <VFooter class="footer" />
  </div>
</template>

<script>
import VHeader from './VHeader.vue'
import VNav from './VNav.vue'
import VFooter from './VFooter.vue'

export default {
  name: 'VHome',
  components: {
    VHeader, VNav, VFooter
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.home
  height 100%
  display flex
  flex-direction column
  color #333

.header, .footer
  background-color #dee1e6
  text-align center
  height 30px
  line-height 30px
  font-size 12px

.header
  border-bottom 1px solid #dadce0

.footer
  border-top 1px solid #dadce0

.main
  background-color #f4f5f5
  flex 1
  display flex

.content
  flex 1
</style>
