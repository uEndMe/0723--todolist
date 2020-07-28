<template>

  <div class="title">
    <el-breadcrumb
      separator="/"
      class="breadcrumb"
    >
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>案例</el-breadcrumb-item>
      <el-breadcrumb-item>todolist</el-breadcrumb-item>
    </el-breadcrumb>
    <h2 class='h2'>todolist</h2>
  </div>
</template>


<script>
export default {
  name: 'VTitle',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script> 

<style lang="stylus" rel="stylesheet/stylus" scoped>
.title
  padding 24px 24px 12px
  background #fff
  border-bottom 1px solid #d7dae2

.breadcrumb
  line-height 22px
  font-weight 400
  opacity 0.6

.h2
  margin-top 8px
  margin-right 12px
  margin-bottom 0
  color rgba(0, 0, 0, 0.85)
  font-weight 600
  font-size 20px
  line-height 32px
  overflow hidden
  white-space nowrap
  text-overflow ellipsis
</style>