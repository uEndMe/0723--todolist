<template>
  <div class="root">
    <VHeader :class="['header',{headerOff}]" />
    <VFooter :class="['footer',{footerOff}]" />
    <section class="main">
      <VNav :class="['aside',{asideOff}]" />
      <router-view class="content" />
    </section>
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
  },
  data () {
    return {
      headerOff: true,
      footerOff: true,
      asideOff: false
    }
  },
  created () {
    window.addEventListener('keyup', this.tog)
  },
  destroyed () {
    window.removeEventListener('keyup', this.tog)
  },
  methods: {
    tog ({ key }) {
      if (document.activeElement.nodeName !== 'BODY')
        return
      if (key === 'f')
        return this.headerOff = this.footerOff = this.asideOff = !this.asideOff
      if (key === 't')
        return this.headerOff = !this.headerOff
      if (key === 'l')
        return this.asideOff = !this.asideOff
      if (key === 'b')
        return this.footerOff = !this.footerOff
    }
  }
}
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
.root
  overflow hidden
  height 100%
  color #333

.header, .footer
  z-index 3
  position fixed
  width 100%
  height 30px
  overflow hidden
  line-height 30px
  font-size 12px
  text-align center
  background-color #dee1e6

.header
  top 0
  border-bottom 1px solid #dadce0

  &:not(.headerOff)~.main
    box-sizing border-box
    padding-top 31px

.headerOff
  height 0
  border 0

.footer
  bottom 0
  border-top 1px solid #dadce0

  &:not(.footerOff)+.main
    box-sizing border-box
    padding-bottom 31px

.footerOff
  height 0
  border 0

.main
  height 100%
  display flex
  background-color #f4f5f5

.content
  flex 1

.aside, .content
  height 100%
  overflow-y auto
  overflow-x hidden

.asideOff
  width 0
  border 0
</style>
