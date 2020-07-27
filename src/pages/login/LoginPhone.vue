<template>

  <el-form
    :model="info"
    :rules="rules"
    class="loginPhone"
    size="large"
    status-icon
  >

    <!-- 手机 -->
    <el-form-item prop="phone">
      <el-input
        placeholder="请输入手机号"
        v-model="info.phone"
        maxlength="11"
        minlength="11"
      >
        <i
          slot="prefix"
          class="el-input__icon el-icon-mobile-phone"
        ></i>
      </el-input>
    </el-form-item>

    <!-- 验证码 -->
    <el-form-item
      class="vLoginCode"
      prop="code"
    >
      <el-input
        placeholder="短信验证码"
        v-model="info.code"
        class="vLoginCodeIn"
        minlength="6"
        maxlength="6"
      >
      </el-input>
      <el-button type="primary">发送验证码</el-button>
    </el-form-item>

    <!-- 其他 -->
    <div class="formMisc">
      <el-checkbox v-model="savePwd">自动登录</el-checkbox>
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
        phone: '',
        code: ''
      },
      savePwd: false,
      rules: {
        phone: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[0-9]{10,10}$/, message: '格式错误', trigger: 'blur' },
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { min: 6, max: 6, message: '长度为 6 个字符' },
          { pattern: /^[a-zA-Z0-9]{6,6}$/, message: '只能由英文、数字组成' }
        ]
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.vLoginCode>.el-form-item__content
  display flex

.vLoginCodeIn
  flex 1
  margin-right 10px
</style>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.loginPhone
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
