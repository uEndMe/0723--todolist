<template>

  <!-- 
    * NavMenu 导航菜单组件
    * 缺陷：
    * 1. 样式内联,难以覆盖         - !important 覆盖（难以维护）
    * 2. template css难以选取     - 去掉 scoped
   -->
  <el-menu
    router
    :default-active="this.$route.path"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#001529"
    text-color="#ffffffa5"
    active-text-color="#fff"
  >

    <h1
      @click="isCollapse=!isCollapse"
      alt="todolist"
      class="h1"
    >
    </h1>
    <!-- 项目 -->
    <el-menu-item index="/home">
      <i class="el-icon-s-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <!-- 项目 -->
    <el-menu-item index="/production">
      <i class="el-icon-s-goods"></i>
      <span slot="title">商品</span>
    </el-menu-item>
    <!-- 项目 -->
    <el-menu-item index="/class">
      <i class="el-icon-menu"></i>
      <span slot="title">分类</span>
    </el-menu-item>
    <!-- 项目 -->
    <el-menu-item index="/param">
      <i class="el-icon-s-operation"></i>
      <span slot="title">参数</span>
    </el-menu-item>
    <!-- 项目 -->
    <el-menu-item index="/order">
      <i class="el-icon-s-order"></i>
      <span slot="title">订单</span>
    </el-menu-item>
    <!-- 项目 -->
    <el-menu-item index="/users">
      <i class="el-icon-user-solid"></i>
      <span slot="title">用户管理</span>
    </el-menu-item>
    <!-- 项目 -->
    <el-menu-item index="/contral">
      <i class="el-icon-s-platform"></i>
      <span slot="title">权限管理</span>
    </el-menu-item>
    <!-- 项目 -->
    <el-submenu index="/info">
      <template slot="title">
        <i class="el-icon-s-data"></i>
        <span slot="title">统计数据</span>
      </template>
      <el-menu-item index="/info">柱状图</el-menu-item>
      <el-menu-item index="/info">折线图</el-menu-item>
      <el-menu-item index="/info">饼图</el-menu-item>
    </el-submenu>
  </el-menu>

</template>

<script>
export default {
  name: 'VNav',
  data () {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.h1
  height 56px

.el-menu-vertical-demo:not(.el-menu--collapse)
  width 200px
  min-height 400px

.el-menu::after
  display none

.el-menu-item
  &:hover, &:focus
    background-color #1890ff !important
    color #fff !important

.el-menu-item
  &:hover i, &:focus i
    color #fff !important
</style>
