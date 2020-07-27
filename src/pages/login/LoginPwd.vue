<template>

  <el-form
    :model="info"
    :rules="rules"
    class="loginPwd"
    size="large"
    status-icon
  >

    <!-- 账号 -->
    <el-form-item prop="user">
      <el-input
        placeholder="admin"
        v-model="info.user"
        maxlength="16"
      >
        <i
          slot="prefix"
          class="el-input__icon el-icon-user"
        ></i>
      </el-input>
    </el-form-item>

    <!-- 密码 -->
    <el-form-item prop="pwd">
      <el-input
        placeholder="123456"
        v-model="info.pwd"
        show-password
        maxlength="16"
      >
        <i
          slot="prefix"
          class="el-input__icon el-icon-lock"
        ></i>
      </el-input>
    </el-form-item>

    <!-- 其他 -->
    <div class="formMisc">
      <el-checkbox
        v-model="savePwd"
        @change="autoWrite"
      >自动登录</el-checkbox>
      <div>
        <el-link :underline="false">忘记密码</el-link>
        <el-link
          :underline="false"
          class="sign"
        >注册</el-link>
      </div>
    </div>

    <!-- 登录 -->
    <el-form-item>
      <el-button
        type="primary"
        native-type="submit"
        class="submit"
      >登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "VLogin",
  data () {
    return {
      info: {
        user: '',
        pwd: ''
      },
      savePwd: false,
      rules: {
        user: [
          { required: true, message: '请输入账号' },
          { min: 4, max: 16, message: '长度在 4 到 16 个字符' },
          { pattern: /^[0-9a-zA-Z\u4e00-\u9fa5]*$/, message: '只能由英文、数字、中文组成' },
        ],
        pwd: [
          { required: true, message: '请输入密码' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符' },
          { pattern: /^[a-zA-Z0-9_-]{4,16}$/, message: '只能由英文、数字、下划线、减号组成', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    autoWrite () {
      const { info } = this
      if (info.user === '' && info.pwd === '') {
        info.user = 'admin'
        info.pwd = '123456'
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.loginPwd
  display flex
  flex-direction column

.formMisc
  flex 1
  margin-bottom 18px
  display flex
  justify-content space-between
  align-items flex-end

.submit
  width 100%

.sign
  margin-left 12px
  padding-left 12px
  border-left 1px solid #808080
</style>
