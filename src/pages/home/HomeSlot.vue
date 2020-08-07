<template>
  <div class="page">
    <VTitle />
    <div class="content">
      slot
    </div>
  </div>
</template>

<script>
import VTitle from '@components/VTitle.vue'
export default {
  name: 'HomeSlot',
  components: { VTitle },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.page
  direction(column)

.content
  flex 1
  margin 24px
  padding 24px
  border-radius 4px
  background-color #fff
</style>
