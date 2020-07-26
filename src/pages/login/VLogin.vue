<template>
  <div class="login">
    <!-- 
      * box-card    卡片
      * 为子元素套上一个 div（__header, __body）
     -->
    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix title"
      >
        <p>用户登录</p>
      </div>
      <el-form
        class="content"
        :model="info"
      >
        <el-input
          placeholder="admin"
          v-model="info.user"
          size="large"
        >
          <i
            slot="prefix"
            class="el-input__icon el-icon-user"
          ></i>
        </el-input>
        <el-input
          placeholder="123456"
          v-model="info.pwd"
          size="large"
        >
          <i
            slot="prefix"
            class="el-input__icon el-icon-lock"
          ></i>
        </el-input>
        <div class="code">
          <el-input
            placeholder="短信验证码"
            v-model="info.code"
            size="large"
            class="codeIn"
          >
          </el-input>
          <el-button
            slot="append"
            type="primary"
            size="large"
          >发送验证码</el-button>
        </div>
        <div class="formEmpty"></div>
        <div class="formMisc">
          <el-checkbox v-model="savePwd">自动登录</el-checkbox>
          <el-link
            :underline="false"
            type="primary"
          >忘记密码</el-link>
        </div>
        <el-button
          type="primary"
          native-type="submit"
          size="large"
          class="submit"
        >登录</el-button>
      </el-form>

    </el-card>
  </div>
</template>

<script>
export default {
  name: "VLogin",
  data () {
    return {
      info: {
        user: '',
        pwd: '',
        code: ''
      },
      savePwd: false,
    }
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

.box-card
  margin-bottom 100px
  width 400px
  background-color rgba(255, 255, 255, 0.8)

.title
  text-align center
  font-size 22px

.content
  height 300px
  padding 20px
  display flex
  flex-direction column

  >*:not(:first-child)
    margin-top 20px

.code
  display flex

.codeIn
  flex 1
  margin-right 10px

.formEmpty
  flex 1

.formMisc
  display flex
  justify-content space-between

.submit
  width 100%
</style>
