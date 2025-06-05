<script setup>
import { useRouter  } from 'vue-router';
import { ref } from 'vue';

const account = ref("");
const password = ref("");
const accountError = ref("");
const passwordError = ref("");
const isSubmit = ref(false);

function inputAccount(){
  const qqNum = /^[1-9]\d{4,10}$/;
  const phoneNum = /^1[3-9]\d{9}$/;
  const emailNum = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  accountError.value = "";
  if(!account.value.trim()){
    accountError.value = "请输入账号！";
    return false;
  }
  if(!qqNum.test(account.value)&&!phoneNum.test(account.value)&&!emailNum.test(account.value)){
    accountError.value = "账号格式不正确，请输入有效的QQ号/手机号/邮箱";
    return false;
  }
  return true;
}

function inputPassword(){
  passwordError.value = "";
  if(!password.value.trim()){
    passwordError.value = "请输入密码";
    return false;
  }
  if(password.value.length < 8){
    passwordError.value = "密码格式不正确，请输入有效的密码";
    return false;
  }
  return true;
}

const handleSubmit = async () => {
  const validateAccount = inputAccount();
  const validatePassword = inputPassword();
  if(!validateAccount || !validatePassword) return;
  try{
    isSubmit.value = true;
    await new Promise(resolve => setTimeout(resolve,2000));
    localStorage.setInem("musicLoggedIn",true);
    router.push({name:"Homepage"})
  } catch(error){
    console.error("登录失败",error);
    alert("登录失败，请检测网络后重试");
  }finally{
    isSubmit.value = false;
  }
};

const router = useRouter();
const ToSignUp = () =>{
  router.push({ name: 'Signup' })
};
const GoBack = () =>{
  router.go(-1)
}

</script>

<template>
  <div class="login-box">
    <div class="back-home">
      <button 
      id="back-home-btn"
      v-on:click="GoBack">← 返回首页</button>
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
        <input 
        type="text" 
        placeholder="支持QQ号/邮箱/手机号登录"
        id="account"
        v-model="account"
        v-on:input="inputAccount"
        v-on:blur="inputAccount"
        v-bind:class="{error:accountError}"
        >
        <div v-if="accountError" class="error-massage">{{ accountError }}</div>
        <input 
        type="password" 
        placeholder="请输入密码"
        id="password"
        v-model="password"
        v-on:input="inputPassword"
        v-on:blur="inputPassword"
        v-bind:class="{error:passwordError}">
        <div v-if="passwordError" class="error-massage">{{ passwordError }}</div>
      </div>
      <button 
      class="login-btn"
      id="submitLogin"
      v-on:click.prevent = "handleSubmit"
      v-bind:disabled="isSubmit"
      v-bind:class="{loading:isSubmit}">{{ isSubmit ? "登录中..." : "登录" }}</button>
      <div class="links">
        <button id="fond-password">找回密码</button>
        <button id="signup-account" v-on:click="ToSignUp">注册账号</button> 
      </div>
    </div>
  </div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;    
}

#back-home-btn{
  width: 100px;
  height: 30px;
  border-radius: 15px;
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 15px;
}

.back-home:hover{
  text-decoration: underline;
}

.login-box{
  max-width: 400px;
  margin: 0 auto;
  margin-top: 200px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  padding: 25px;
  font-family: "Microsoft Yahei", sans-serif;
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
.error-massage{
  color: #ff4d4f;
  font-size: 12px;
  margin: -10px 0 12px;
  height: auto;     
}
.input-group input{
  margin-bottom: 15px;
}
input.error{
  border-color: #ff4d4f !important;
}
.login-btn.loading{
  opacity: 0.7;
  pointer-events: none;
  position: relative;
}
.login-btn.loading::after{
  content: "";
  position: absolute;
  right: 10px;
  width: 16px;
  height: 16px;
  border: 2px solid #fff;
  border-top-color: transparent;
  border-radius: 50px;
  animation: spin 0.8s linear infinite;
}
@keyframes spin{
  to { transform: rotate(360deg); }
}
  #foud-password{
    width: 20px;
    height: 30px;
}
</style>