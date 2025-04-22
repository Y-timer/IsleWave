<script>
export default {
  name:"LoginPage"
}

</script>

<template>
  <nav class="login-box">
    <div class="back-home">
      <button v-on:click="$emit('back')">← 返回首页</button>
    </div>
    <div class="login-box-hd">
      <h2 class="login-box-select">
        <a class="qq-login">QQ登录</a>
        <a class="wechat-login">微信登录</a>
      </h2>
    </div>
    <div class="login-box-bd">
      <div class="qq-login">
        <a class="qq-login-hd">密码登录</a>
        <input type="text" placeholder="支持QQ号/邮箱/手机号登录">
        <input type="password" placeholder="请输入密码">
      </div>
      <button class="login-btn">登录</button>
      <div class="links">
        <a href="#">找回密码</a>
        <a href="#">注册账号</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
*{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Microsoft Yahei", sans-serif;
    }
    .back-home{
      position: absolute;
      top: 20px;
      left: 20px;
      color: #31c27c;
      text-decoration: none;
      font-size: 14px;
    }
    body{
      background: #f5f5f5;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 100px;
    }

    .login-box{
      width: 370px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      padding: 25px;
    }

    .login-box-hd{
      border-bottom: 1px solid #eee;
      padding-bottom: 20px;
      text-align: center;
    }

    .login-box-select{
      display: flex;
      gap:30px;
      justify-content: center;
    }

    .login-box-select a{
      font-size: 18px;
      color: #666;
      text-decoration: none;
      padding-bottom: 5px;
    }

    .login-box-select a.qq-login{
      color: #000;
      border-bottom: 2px solid #31c27c;
    }

    .login-box-bd{
      padding: 20px 0;
    }

    .input-group{
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin: 20px 0;
    }

    input{
      width: 100%;
      height: 40px;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 0 15px;
      margin-bottom: 15px;
    }
    input::placeholder{
      color: #ccc;
    }
    .login-btn{
      width: 100%;
      height: 40px;
      background: #31c27c;
      color: white;
      border: none;
      border-radius:4px;
      font-size: 16px;
      cursor: pointer;
    }
    .links{
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
      font-size: 14px;
    }
    .links a{
      color:#31c27c;
      text-decoration: none;
    }
    .qq-login-hd{
      text-align: center;
      margin: 10px 0;
      color: #000;
      font-size: 16px;
      display: block;
      width: 100%;
    }
    .qq-login {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
</style>