<template>
  <div class="register">
    <div class="login-form">
      <p>注册账号</p>
      <el-form class="form"
               ref="form"
               :model="form"
               label-width="80px">
        <el-form-item label="手机号">
          <el-input
            placeholder="手机号"
            prefix-icon="el-icon-user-solid"
            v-model="form.username">
          </el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            type="password"
            placeholder="密码"
            prefix-icon="el-icon-key"
            v-model="form.password">
          </el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input
            type="password"
            placeholder="确认密码"
            prefix-icon="el-icon-key"
            v-model="form.repeatPwd">
          </el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <div class="df">
            <el-input
              placeholder="输入验证码"
              prefix-icon="el-icon-key"
              v-model="form.captcha">
            </el-input>
            <img style="cursor:pointer;" :src="captchaUrl"
                 @click="refreshCaptcha"
                 alt="验证码">
          </div>
        </el-form-item>
      </el-form>
      <div class="flex-c-c btn-row">
        <el-button type="primary" @click="handleRegister">注册</el-button>
        <el-button type="primary" plain @click="$router.push({name:'UserLoginPage'})">返回登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { getVerifyCode, register } from '@/api/apiFunc'
import axios from 'axios'

export default {
  name: 'UserRegister',
  data () {
    return {
      captchaUrl: '',
      form: {
        username: '',
        password: '',
        repeatPwd: '',
        captcha: '',
      }
    }
  },
  mounted () {
    this.refreshCaptcha()
  },
  methods: {
    refreshCaptcha () {
      getVerifyCode().then(res => {
        this.captchaUrl = res.data.result
      }).catch(err => {
        console.log(err)
      })
    },
    handleRegister() {
      this.$refs.form.validate((valid)=>{
        if (valid){
          let reqData = {
            "captcha": this.form.captcha,
            "checkKey": "abc123456",
            "password": this.form.password,
            "username": this.form.username
          }
          register(reqData).then(res=>{
            if (res.data.code === 200){
              this.$notify({
                title: '成功',
                message: '注册成功.',
                type: 'success'
              });
            }
          }).catch(err=>{
            console.log(err)
          })
        }
      })
    },
  },
}
</script>
<style lang="scss">
.register {
  width: 710px;
  margin: 0 auto;
  padding-top: 46px;

  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #eee;

    > p {
      font-size: 30px;
      font-weight: 400;
      width: 100%;
      text-align: center;
      border-bottom: 1px solid #eee;
      margin: 0;
      padding: 20px 0
    }
  }

  .form {
    width: 600px;
    padding: 40px;
    box-sizing: border-box;
    background: url("../assets/images/form-bg.png") no-repeat;
    background-size: cover;
  }
  .btn-row{
    padding-bottom: 20px;
  }
}
</style>
