<template>
  <div class="login">
<!-- elementTUI card  卡片组件 -->
<el-card class="login-card">
  <div class="login-logo">
  <img src="../../assets/img/logo_index.png" alt="">
</div>
  <!-- 卡片内容 -->
  <!--表单 -->
  <el-form ref="myForm" style="margin-top:10px" :model="loginForm" :rules='loginRules'>
    <!-- 一个表单域就有一个el-form-item -->
    <el-form-item prop='mobile'>
      <!-- 手机号 -->
      <el-input v-model="loginForm.mobile" placeholder='请输入手机号'></el-input>
    </el-form-item>
    <!-- 短信验证 -->
    <el-form-item prop='code'>
      <el-input style="width:250px" v-model="loginForm.code" placeholder="请输入验证码" ></el-input>
       <el-button style="float:right" plain>发送验证码</el-button>
    </el-form-item>
      <el-form-item prop='code'>
        <el-checkbox v-model="loginForm.check">我已阅读并同意次条款内容</el-checkbox>
      </el-form-item>
       <el-form-item>
          <el-button @click="login" style="width:100%  " type="primary">登录</el-button>
      </el-form-item>

  </el-form>

</el-card>

  </div>
</template>

<script>
export default {
  data () {
    let validator = function (rule, value, callBack) {
      value ? callBack() : callBack(new Error('您必须同意无条件被我们蒙骗'))
    }
    return {
      loginForm: {
        mobile: '',
        code: '',
        check: ''
      },
      loginRules: {
        mobile: [{ required: true, message: '请输入您的手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入合法的手机号' }],
        code: [{ required: true, message: '请输入您的验证码' },
          { pattern: /^\d{6}$/, message: '验证码为6位数字' }],
        agree: [{ validator }]
      }
    }
  },
  methods: {
    login () {
      // 校验整个表单的规则
      // validate 是一个方法 => 方法中传入的一个函数 两个校验参数  是否校验成功/未校验成功的字段
      this.$refs.myForm.validate(function (isOK) {
        if (isOK) {
          console.log('校验成功')
        }
      })
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
