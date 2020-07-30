<template>
  <div class="page">
    <VTitle />
    <div class="table">
      <p>666</p>
    </div>

  </div>

</template>


<script>
import VTitle from '@components/VTitle.vue'
export default {
  name: 'HomeTodolist',
  components: { VTitle },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script> 

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'

.page
  direction(column)

.table
  flex 1
  margin 24px
  padding 24px
  border-radius 4px
  background-color #fff
  white-space rap
</style>