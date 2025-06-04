<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const ToLogin = () =>{
  router.push({ name: 'Login' })
};
const ToMyMusic = () => {
  router.push({name: 'MyMusic'})
};
</script>

<template>
  <nav class="top-nav">
    <div class="nav-container">
    <div class="top-left">
      <h1 class="logo">IsleWave 音乐</h1>
      <ul class="nav-links">
        <li id="top-one"><a href="#" id="music-house">音乐馆</a></li>
        <li id="my-music"><a v-on:click="ToMyMusic">我的音乐</a></li>
        <li><a href="#">客户端</a></li>
        <li id="the-shopping"><a href="#">商城</a></li>
        <li id="the-vip"><a href="#" class="VIP">VIP</a></li>
      </ul>
    </div>
    <div class="top-right">
      <div class="search-box">
        <input type="search" placeholder="搜索音乐、MV、歌单、用户">
        <button class="search-button">Q</button>
      </div>
      <button class="login" v-on:click="ToLogin">登录</button>
      <span class="open-vip" href="#">开通VIP</span>
      <button class="recharge">充值</button>
    </div>
    </div>
  </nav>
</template>

<style scoped>
.top-nav{
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  padding: 12px 0;
}

.nav-container{
  max-width: 1200px;
  margin:0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0;
}

.nav-links a{
  color:#333;
  
}

.nav-links a:hover{
  color: #2dd584;
}

.top-left{
  display: flex;
  align-items: center;
  gap: 25px;
}

.top-nav{
  display: flex;
  align-items: center;
  gap: 20px;
}

.logo{
  color:#2dd584;
  font-size: 28px;
  margin: 0;
  line-height: 1;
}

.nav-links{
  display: flex;
  gap: 35px;
  list-style: none;
  height: 100%;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-links a{
  color: #333;
  text-decoration: none;
  font-size:18px;
  padding: 8px 0;
  position: relative;
  transition: color 0.2s;
}

.top-right{
  display: flex;
  align-items: center;
  gap: 5px;
  padding-left: 15px;
}

.search-box{
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 5px 10px;
}

.search-box input{
  border: none;
  background: transparent;
  outline: none;
  padding: 5px;
  width: 120px;
  font-size: 15px;
}

.search-button{
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
}

.VIP{
  color: #ff3a3a !important;
  font-weight: bold;
}

.login,.recharge{
  background: #f8f8f8;
  border:1px solid #ddd;
  border-radius:5px;
  padding: 4px 10px;
  cursor: pointer;
  border-left: 10px;
  font-size: 16px;
}

.open-vip{
  font-size: 16px;
}
</style>