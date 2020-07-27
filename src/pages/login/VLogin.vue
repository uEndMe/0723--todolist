<template>
  <div class="login">

    <el-tabs class="card">
      <el-tab-pane label="密码登录">
        <LoginPwd class="pane" />
      </el-tab-pane>
      <el-tab-pane label="手机登录">
        <LoginPhone class="pane" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import LoginPwd from './LoginPwd'
import LoginPhone from './LoginPhone'
export default {
  name: "VLogin",
  components: {
    LoginPwd, LoginPhone
  },
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.login
  height 100%
  display flex
  justify-content center
  align-items center
  background url('/images/loginBg.jpg') center / cover

.card
  width 380px
  border-radius 4px
  background-color rgba(255, 255, 255, 0.8)

.pane
  padding 40px
  height 300px
</style>
