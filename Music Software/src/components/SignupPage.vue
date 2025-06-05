<script setup>
import { ref, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const ToLogin = () =>{
  router.push({ name: 'Login' })
};

const name = ref('');
const password = ref('');
const phoneNum = ref('');
const captcha = ref('');
const countryCode = ref('+86');
const countdown = ref(0);
const timer = ref(null);

//错误信息
const nameError = ref('');
const passwordError = ref('');
const captchaError = ref('');
const phoneNumError = ref('');

const isSubmitting = ref(false);
const showCaptchaGroup = ref(false);

//验证规则
const nameRule = /^[\u4e00-\u9fa5a-zA-Z0-9]{2,16}$/;
const passwordRule = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
const phoneRule = /^1[3-9]\d{9}$/;

//验证昵称
function validateName(){
  nameError.value = ''
  if(!name.value){
    nameError.value = '请输入昵称'
    return false
  }
  if(!nameRule.test(name.value)){
    nameError.value = '昵称需2-16位，仅支持中文、字母和数字'
    return false
  }
  return true
}
//验证密码
function validatePassword(){
  passwordError.value = ''
  if(!password.value){
    passwordError.value = '请输入密码'
    return false
  }
  if(!passwordRule.test(password.value)){
    passwordError.value = '需8位以上，包含大写字母和特殊符号'
    return false
  }
  return true
}
//验证手机号
function validatePhone(){
  phoneNumError.value = ''
  if(!phoneNum.value){
    phoneNumError.value = '请输入手机号'
    return false
  }
  if(!phoneRule.test(phoneNum.value)){
    phoneNumError.value = '请输入有效的11位中国大陆手机号'
    return false
  }
  return true
}
//验证验证码
function validateCaptcha(){
  captchaError.value = ''
  if(!captcha.value){
    captchaError.value = '请输入短信验证码'
    return false
  }
  if(!/^\d{6}$/.test(captcha.value)){
    captchaError.value = '验证码必须是6位数'
    return false
  }
  return true;
}
//手机号输入
function handlePhoneInput(){
  const isValid = validatePhone();
  showCaptchaGroup.value = phoneNum.value.length > 0 && isValid;
}
//验证码倒计时
function startCountdown(){
  if(countdown.value > 0) return
  countdown.value = 60;
  timer.value = setInterval(()=>{
    countdown.value--;
    if(countdown.value <= 0){
      clearInterval(timer.value)
    }
  },1000)
}
//获取验证码
function handleGetCaptcha(){
  if(!validatePhone()) return
  startCountdown()
  setTimeout(()=>{
    alert('验证码已发送至您的手机')
  },1000)
}
//表单提交
const handleSubmit = async () =>{
  const shoudValidate = [
    !name.value,
    !password.value,
    !phoneNum.value,
    !captcha.value
  ].some(Boolean)
  if(shoudValidate){
    validateName()
    validatePassword()
    validateCaptcha()
    validatePhone()
    return
  }

  const validations = [
    validateName(),
    validatePassword(),
    validatePhone(),
    validateCaptcha()
  ]
  if(!name.value) nameError.value = '请输入昵称'
  if(!password.value) passwordError.value = '请输入密码'
  if(!phoneNum.value) phoneNumError.value = '请输入手机号'
  if(!captcha.value) captchaError.value = '请输入验证码'
  if(validations.includes(false)) return

  try{
    isSubmitting.value = true;
    await new Promise(resolve => setTimeout(resolve,2000));
    alert('注册成功');
    setTimeout(()=>{
      ToLogin();  
    },500)
  } catch(error){
    alert('注册失败，请稍后再试')
  } finally{
    isSubmitting.value = false
  }
}
// 清理定时器
onUnmounted(() => {
  if (timer.value) clearInterval(timer.value)
})
</script>

<template>
  <nav class="sign-up-box">
    <div class="the-top">
      <h2 class="the-welcome">欢迎注册 IsleWave 音乐</h2>
      <div class="the-title">每一天，乐在音乐。</div>
    </div>
    <div class="sign-up-bd">
      <input 
      type="text" 
      id="name" 
      placeholder="昵称"
      v-model="name"
      v-on:input="validateName"
      v-bind:class="{error:nameError}">
      <div class="error-massage" v-show="nameError">{{ nameError }}</div>

      <input 
      type="password" 
      id="password" 
      placeholder="密码"
      v-model="password"
      v-on:input="validatePassword"
      v-bind:class="{error:passwordError}">
      <div class="error-massage" id="passwordError"
      v-show="passwordError">{{ passwordError }}</div>

      <div class="phone-input">
        <select v-model="countryCode"  class="country">
          <option value="+86">+86</option>
          <option value="+852">+852</option>
          <option value="+853">+853</option>
          <option value="+886">+886</option>
        </select>
        <input 
        type="tel" 
        id="phoneNum" 
        placeholder="手机号码" 
        maxlength="11"
        v-model="phoneNum"
        v-on:input="handlePhoneInput"
        v-bind:class="{error: phoneNumError}">
      </div>
      <div 
      class="error-massage" 
      id="phoneNumError"
      v-show="phoneNumError">{{ phoneNumError }}</div>

      <div 
      class="captcha-group" 
      v-show="showCaptchaGroup">
        <input 
        type="number" 
        class="input-captcha" 
        placeholder="短信验证码" 
        id="captcha"
        v-model="captcha"
        v-on:input="validateCaptcha"
        v-bind:class="{error:captchaError}"
        >
        <button 
        class="getCaptcha" 
        id="getCaptchaBtn"
        v-on:click="handleGetCaptcha"
        v-bind:disabled="countdown > 0"
        v-bind:class="{disabled: countdown > 0}"
        >{{ countdown > 0 ? `${countdown}秒后重发`:'获取验证码' }}</button>
      </div>
      <div 
      class="error-massage" 
      id="captchaError"
      v-show="captchaError"
      >{{ captchaError }}</div>

      <button 
      class="sign-up-btn" 
      id="submitSignup"
      v-on:click.prevent="handleSubmit">{{ isSubmitting ? '注册中...' : '立即注册' }}</button>
    </div>
  </nav>
</template>

<style scoped>
    body {
      background: #b4a9ed;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
    }
    .sign-up-box {
      margin: 0 auto;
      margin-top: 200px;
      font-family: "Microsoft Yahei", sans-serif;
      width: 100%;
      height: 100%;
      max-width: 400px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 30px;
      box-sizing: border-box;
      font-family: "Microsoft Yahei", sans-serif;
    }
    .the-welcome {
      color: #333;
      font-size: 22px;
      margin-bottom: 8px;
      text-align: center;
    }
    .the-title {
      color: #888;
      font-size: 14px;
      text-align: center;
      margin-bottom: 30px;
    }
    .sign-up-bd {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    input {

      width: 305px;
      padding: 12px 16px;
      border: 1px solid #ddd;
      border-radius: 6px;
      font-size: 14px;
      transition: border 0.3s;
    }
    input:focus {
      border-color: #12b7f5;
      outline: none;
    }
    .phone-input {
      display: flex;
      border: 1px solid #ddd;
      border-radius: 6px;
      overflow: hidden;
    }
    .country {
      padding: 0 12px;
      border: none;
      border-right: 1px solid #ddd;
      background: #f9f9f9;
      font-size: 14px;
    }
    #phoneNum {
      border: none;
      flex: 1;
      padding: 12px;
    }
    .captcha-group {
      display: flex !important;
      gap: 10px;
      margin-top: 10px;
    }
    .input-captcha {
      flex: 1;
      padding: 12px 16px;
      border: 1px solid #ddd;
      border-radius: 6px;
    }
    .getCaptcha {
      background: #12b7f5;
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s;
      white-space: nowrap;
    }
    .getCaptcha:hover:not(.disabled) {
      background: #0e9ddb;
    }
    .getCaptcha.disabled {
      background: #ccc;
      cursor: not-allowed;
    }
    .error-massage {
      color: #ff4d4f;
      font-size: 12px;
      margin: 0 0 0px;
      height: 18px;
    }
    input.error {
      border-color: #ff4d4f !important;
    }
    .sign-up-btn {
      background: #12b7f5;
      color: white;
      padding: 14px;
      border-radius: 6px;
      border: none;
      font-size: 16px;
      cursor: pointer;
      transition: background 0.3s;
      margin-top: 15px;
    }
    .sign-up-btn:hover {
      background: #0e9ddb;
    }
    .sign-up-btn.loading {
      opacity: 0.7;
      pointer-events: none;
      position: relative;
    }
    .sign-up-btn.loading::after {
      content: "";
      position: absolute;
      right: 15px;
      width: 18px;
      height: 18px;
      border: 2px solid #fff;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    .error{
      border-color:#ff4d4f !important; 
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
</style>