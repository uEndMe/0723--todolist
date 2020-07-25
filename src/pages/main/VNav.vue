<template>
  <!-- 
    * NavMenu 导航菜单组件
    * 缺陷：
    * 1. 样式内联,难以覆盖         - !important 覆盖（难以维护）
    * 2. template css难以选取     - 去掉 scoped
   -->
  <el-menu
    default-active="0"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#001529"
    text-color="#ffffffa5"
    active-text-color="#fff"
  >
    <!-- 伸缩按钮 -->
    <el-menu-item>
      <el-radio-group
        v-model="isCollapse"
        style="margin-bottom: 20px;"
      >
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
    </el-menu-item>
    <!-- 标题 -->
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </template>
      <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <!-- 项目 -->
    <el-menu-item index="2">
      <i class="el-icon-s-goods"></i>
      <span slot="title">商品</span>
    </el-menu-item>
    <!-- 项目 -->
    <el-menu-item index="3">
      <i class="el-icon-menu"></i>
      <span slot="title">分类</span>
    </el-menu-item>
    <!-- 项目 -->
    <el-menu-item index="4">
      <i class="el-icon-s-operation"></i>
      <span slot="title">参数</span>
    </el-menu-item>
    <!-- 项目 -->
    <el-menu-item index="5">
      <i class="el-icon-s-order"></i>
      <span slot="title">订单</span>
    </el-menu-item>
    <!-- 项目 -->
    <el-menu-item index="6">
      <i class="el-icon-user-solid"></i>
      <span slot="title">用户管理</span>
    </el-menu-item>
    <!-- 项目 -->
    <el-menu-item index="7">
      <i class="el-icon-s-platform"></i>
      <span slot="title">权限管理</span>
    </el-menu-item>
    <!-- 项目 -->
    <el-submenu index="8">
      <template slot="title">
        <i class="el-icon-s-data"></i>
        <span slot="title">统计数据</span>
      </template>
      <el-menu-item index="8-1">柱状图</el-menu-item>
      <el-menu-item index="8-2">折线图</el-menu-item>
      <el-menu-item index="8-3">饼图</el-menu-item>
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
.el-menu-vertical-demo
  &:not(.el-menu--collapse)
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
