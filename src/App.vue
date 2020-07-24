<template>
  <div id="app">
    <el-container>
      <el-header>header 菜单栏</el-header>
      <el-container>
        <el-aside>aside</el-aside>
        <el-main>
          <VTodolist></VTodolist>
        </el-main>
      </el-container>
      <el-footer>footer 状态栏</el-footer>
    </el-container>
  </div>
</template>

<script>
import VTodolist from './components/VTodolist.vue'

export default {
  name: 'App',
  components: {
    VTodolist
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #b3c0d1;
  color:#333;
  text-align: center;
  line-height:60px;
}
.el-aside{
  background-color: #b3c0d1;
  color:#333;
  text-align: center;
  line-height: 200px;
}
.el-main{
  background-color:#e9eef3;
  color:#333;
  text-align:center;
  line-height: 160px;
}
</style>
