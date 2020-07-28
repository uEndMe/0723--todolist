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
    active-text-color="#1890ff"
  >

    <h1
      @click="isCollapse=!isCollapse"
      alt="todolist"
      class="h1"
    >
      <i :class="'el-icon-arrow-' + (isCollapse ? 'right' : 'left')"></i>
    </h1>
    <!-- 首页 -->
    <el-submenu index="/home">
      <template slot="title">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </template>
      <el-menu-item index="/home">
        <i class="el-icon-user-solid"></i>
        <span slot="title">我的</span>
      </el-menu-item>
      <!-- 案例 -->
      <el-submenu index="/home/todolist">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span slot="title">案例</span>
        </template>
        <el-menu-item index="/home/todolist">
          <i class="el-icon-star-on"></i>
          <span slot="title">todolist</span>
        </el-menu-item>
        <el-menu-item index="/home/vuex">
          <i class="el-icon-star-on"></i>
          <span slot="title">vuex</span>
        </el-menu-item>
      </el-submenu>
    </el-submenu>
    <!-- 商品 -->
    <el-menu-item index="/production">
      <i class="el-icon-s-goods"></i>
      <span slot="title">商品</span>
    </el-menu-item>
    <!-- 分类 -->
    <el-menu-item index="/class">
      <i class="el-icon-menu"></i>
      <span slot="title">分类</span>
    </el-menu-item>
    <!-- 参数 -->
    <el-menu-item index="/param">
      <i class="el-icon-s-operation"></i>
      <span slot="title">参数</span>
    </el-menu-item>
    <!-- 订单 -->
    <el-menu-item index="/order">
      <i class="el-icon-s-order"></i>
      <span slot="title">订单</span>
    </el-menu-item>
    <!-- 用户管理 -->
    <el-menu-item index="/users">
      <i class="el-icon-s-custom"></i>
      <span slot="title">用户管理</span>
    </el-menu-item>
    <!-- 权限管理 -->
    <el-menu-item index="/contral">
      <i class="el-icon-s-platform"></i>
      <span slot="title">权限管理</span>
    </el-menu-item>
    <!-- 统计设置 -->
    <el-submenu index="/info">
      <template slot="title">
        <i class="el-icon-s-data"></i>
        <span slot="title">统计数据</span>
      </template>
      <el-menu-item index="/info">
        <i class="el-icon-s-data"></i>
        <span slot="title">柱状图</span>
      </el-menu-item>
      <el-menu-item index="/info">
        <i class="el-icon-s-marketing"></i>
        <span slot="title">折线图</span>
      </el-menu-item>
      <el-menu-item index="/info">
        <i class="el-icon-more"></i>
        <span slot="title">其他</span>
      </el-menu-item>
    </el-submenu>
    <!-- 设置 -->
    <el-menu-item index="/setting">
      <i class="el-icon-s-tools"></i>
      <span slot="title">设置</span>
    </el-menu-item>
  </el-menu>

</template>

<script>
export default {
  name: 'VNav',
  data () {
    return {
      isCollapse: true,
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

<style lang="stylus" rel="stylesheet/stylus" >
.el-menu-vertical-demo:not(.el-menu--collapse)
  width 200px
</style>

<style lang="stylus" rel="stylesheet/stylus" scoped>
::-webkit-scrollbar-thumb
  background-color transparent

.h1
  height 56px
  line-height 56px
  font-size 14px
  text-align center
  cursor pointer
  color rgba(255, 255, 255, 0.647)

.el-menu-vertical-demo
  // box-shadow 0 2px 12px 0 rgba(0, 0, 0, 0.2)

.el-menu
  border 0

  &::after
    display none

.el-menu-item
  &:hover, &:focus
    background-color #1890ff !important
    color #fff !important

.el-menu-item
  &:hover i, &:focus i
    color #fff !important
</style>
