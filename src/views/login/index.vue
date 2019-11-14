<template>
  <div class="login">
<!-- elementTUI card  卡片组件 -->
<el-card class="login-card">
  <div class="login-logo">
  <img src="../../assets/img/logo_index.png" alt="">
</div>
  <!-- 卡片内容 -->
  <!--表单 -->
  <el-form style="margin-top:10px" :model="loginForm" :rules='loginRules'>
    <!-- 一个表单域就有一个el-form-item -->
    <el-form-item prop='mobile'>
      <!-- 手机号 -->
      <el-input v-model="loginForm.mobile"></el-input>
    </el-form-item>
    <!-- 短信验证 -->
    <el-form-item prop='code'>
      <el-input style="width:250px" v-model="loginForm.code" ></el-input>
       <el-button style="float:right" plain>发送验证码</el-button>
    </el-form-item>
      <el-form-item prop='code'>
        <el-checkbox v-model="loginForm.check">我已阅读并同意次条款内容</el-checkbox>
      </el-form-item>
       <el-form-item>
          <el-button style="width:100%  " type="primary">登录</el-button>
      </el-form-item>

  </el-form>

</el-card>

  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        code: '',
        check: ''
      },
      loginRules: {}
    }
  }

}
</script>

<style lang='less' scoped>
.login{
background-image: url('../../assets/img/login_bg.jpg');
background-size: cover;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
.login-card{
  width: 450px;
  height: 320px;
  .login-logo{
    // text-align: center;
    padding-left: 72px;
    img{
      height: 45px;
    }
  }
}

}
</style>
