<template>
  <div class="root">
    <VHeader class="header" />
    <section class="main">
      <VNav class="aside" />
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
  name: 'VRoot',
  components: {
    VHeader, VNav, VFooter
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.root
  overflow hidden
  height 100%
  color #333

.header, .footer
  position fixed
  width 100%
  height 30px
  line-height 30px
  font-size 12px
  text-align center
  background-color #dee1e6

.header
  top 0
  border-bottom 1px solid #dadce0

.footer
  bottom 0
  border-top 1px solid #dadce0

.main
  box-sizing border-box
  height 100%
  padding 31px 0
  display flex
  background-color #f4f5f5

.content
  flex 1

.aside, .content
  height 100%
  overflow-y auto
  overflow-x hidden
</style>
