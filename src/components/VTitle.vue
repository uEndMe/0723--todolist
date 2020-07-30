<template>

  <header class="title">
    <div class="left">
      <h2 class='h2'>todolist</h2>
      <el-breadcrumb
        separator="/"
        class="breadcrumb"
      >
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>案例</el-breadcrumb-item>
        <el-breadcrumb-item>todolist</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right">
      <el-link
        :underline="false"
        class="button"
      >
        <i class="el-icon-setting"></i>
        设置
      </el-link>
      <el-link
        :underline="false"
        class="button"
      >
        <i class="el-icon-bell"></i>
        消息
      </el-link>
      <el-link
        :underline="false"
        class="button"
      >
        <i class="el-icon-warning-outline"></i>
        帮助
      </el-link>
      <el-avatar
        class="avatar"
        src="/favicon.ico"
      ></el-avatar>
    </div>
  </header>
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
  display flex
  justify-content space-between
  padding 8px 24px
  border-bottom 1px solid #d7dae2
  background #fff

.left, .right
  display flex
  align-items center
  font-size 14px

.breadcrumb
  line-height 22px
  font-weight 400

.h2
  margin-block-start 0
  margin-block-end 0
  margin-right 12px
  color rgba(0, 0, 0, 0.85)
  vertical-align middle
  font-weight 600
  font-size 22px

.avatar
  width 32px
  height 32px

.button
  margin-right 16px
  color rgba(0, 0, 0, 0.45)
</style>