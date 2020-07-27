<template>
  <div class="login">
    <!-- 
      * box-card    卡片
      * 为子元素套上一个 div（__header, __body）(scoped无法选中)
      
      * el-for-item  表单项
      * 为子元素套上一个 div (__content) (scoped无法选中)
     -->
    <el-card class="box-card">
      <!-- 标题 -->
      <div
        slot="header"
        class="clearfix title"
      >
        <p>用户登录</p>
      </div>
      <!-- 内容 -->
      <el-form
        :model="info"
        :rules="rules"
        class="content"
      >
        <!-- 账号 -->
        <el-form-item prop="user">
          <el-input
            placeholder="admin"
            v-model="info.user"
            maxlength="16"
            size="large"
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
            size="large"
          >
            <i
              slot="prefix"
              class="el-input__icon el-icon-lock"
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
            size="large"
            class="vLoginCodeIn"
            minlength="6"
            maxlength="6"
          >
          </el-input>
          <el-button
            type="primary"
            size="large"
          >发送验证码</el-button>
        </el-form-item>
        <div class="formEmpty"></div>
        <!-- 其他选项 -->
        <div class="formMisc">
          <el-checkbox v-model="savePwd">自动登录</el-checkbox>
          <el-dropdown>
            <span class="el-dropdown-link">
              更多<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>手机登录</el-dropdown-item>
              <el-dropdown-item>忘记密码</el-dropdown-item>
              <el-dropdown-item>注册账号</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <!-- 登录 -->
        <el-form-item>
          <el-button
            type="primary"
            native-type="submit"
            size="large"
            class="submit"
          >登录</el-button>
        </el-form-item>
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
      rules: {
        user: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' },
          { pattern: /^[0-9a-zA-Z\u4e00-\u9fa5]*$/, message: '只能由英文、数字、中文组成', trigger: 'blur' },
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' },
          { pattern: /^[a-zA-Z0-9_-]{4,16}$/, message: '只能由英文、数字、下划线、减号组成', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 6, max: 6, message: '长度为 6 个字符', trigger: 'blur' },
          { pattern: /^[a-zA-Z0-9]{6,6}$/, message: '只能由英文、数字组成', trigger: 'blur' }
        ]
      }
    }
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

.formMisc
  flex 1
  margin-bottom 18px
  display flex
  justify-content space-between
  align-items flex-end

.el-dropdown-link
  cursor pointer
  color #409EFF

.el-icon-arrow-down
  font-size 12px

.submit
  width 100%
</style>
