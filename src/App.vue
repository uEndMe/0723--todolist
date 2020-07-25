<template>
  <div id="app">
    <VHeader class="header" />
    <section class="main">
      <VNav />
      <VTodolist class="content" />
    </section>
    <VFooter class="footer" />
  </div>
</template>

<script>
import VHeader from './pages/main/VHeader.vue'
import VNav from './pages/main/VNav.vue'
import VTodolist from './pages/main/content/VTodolist.vue'
import VFooter from './pages/main/VFooter.vue'

export default {
  name: 'App',
  components: {
    VHeader, VNav, VTodolist, VFooter
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#app
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
