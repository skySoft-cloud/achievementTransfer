<template>
  <div class="login-page">
    <div class="back-home">
      <el-button type="text" @click="goLogin" style="color: #ffffff;font-size: 16px">返回首页</el-button>
    </div>
    <div class="login-content">
      <div class="login-form">
        <img src="../assets/images/logo1.png"
             >
        <p>基于大数据科技孵化成果转移转化平台</p>
        <div class="form">
          <el-input
            style="margin-bottom: 25px;"
            placeholder="用户名"
            prefix-icon="el-icon-user-solid"
            v-model="form.name">
          </el-input>
          <el-input
            style="margin-bottom: 45px;"
            type="password"
            placeholder="密码"
            prefix-icon="el-icon-key"
            v-model="form.pwd">
          </el-input>
          <div class="login-button" @click="goLogin">登录</div>
        </div>
      </div>
        <div class="bottom-info">
          <span>技术支持：四川中顺恒科技有限公司</span>
          <div class="bottom-info-contact">
            <span>主办方：成都中企艾维数据有限公司</span>
            <span>电话：028-65215025</span>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginPage",
  data() {
    return {
      form: {
        name: '',
        pwd: ''
      }
    }
  },
  mounted () {
    console.log(this)
  },
  methods: {
    goLogin() {
      this.$router.push({name: 'PublishResult'})
    }
  },
};
</script>
<style lang="scss">
.login-page{
  .back-home{
    text-align: right;
    padding-right: 10px;
  }
  width: 100%;
  height: auto;
  background: url("../assets/images/login-bg.png") no-repeat center;
  background-size: cover;
  .login-content{
    width: 710px;
    margin: 0 auto;
    padding-top: 46px;
    .login-form{
      display: flex;
      flex-direction: column;
      align-items: center;
      >img{
        height: 128px;
      }
      >p{
        font-size: 40px;
        font-weight: 400;
        color: #FFFFFF;
      }
    }
    .form{
      width: 690px;
      padding: 60px 104px;
      box-sizing: border-box;
      background: url("../assets/images/form-bg.png") no-repeat;
      background-size: cover;

      .login-button{
        width: 481px;
        background: #2B8CD7;
        height: 80px;
        font-size: 36px;
        color: #FFFFFF;
        line-height: 80px;
        text-align: center;
        &:hover{
          cursor: pointer;
        }
      }
      .el-input__inner{
        height: 80px;
        font-size: 20px;
      }
      .el-input__prefix{
        font-size: 20px;
      }
    }
    .bottom-info{
      position: fixed;
      bottom: 0;
      width: 710px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 26px;
      color: #FFFFFF;
      .bottom-info-contact{
          margin-bottom: 15px;
        margin-top: 15px;
      }
    }
  }
}
</style>
