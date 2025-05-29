<script setup>
import { ref } from 'vue';

const playlists = ref([
  {
    imageUrl:"/pic1.jpg",
    title:"你的能量助力曲",
    playCount:"888万"
  },
  {
    imageUrl:"/pic2.jpg",
    title:"经典怀旧金曲",
    playCount:"2452万"
  },
  {
    imageUrl:"/pic3.jpg",
    title:"轻音乐",
    layCount:"121万"
  },
  {
    imageUrl:"/pic4.jpg",
    title:"深夜助眠钢琴曲",
    playCount:"672万"
  },
  {
    imageUrl:"/pic7.jpg",
    title:"写作业必听",
    playCount:"8886万"
  }
])
</script>

<template>
  <nav class="the-body">
    <div class="body-top">
      <h1 class="the-title">歌单推荐</h1>
    </div>
    <div class="body-container">
      <ul class="body-links">
        <li><a href="#">为你推荐</a></li>
        <li><a href="#">官方推荐</a></li>
        <li><a href="#">网路歌曲</a></li>
        <li><a href="#">轻音乐</a></li>
        <li><a href="#">00年代</a></li>
        <li><a href="#">最受欢迎</a></li>
      </ul>
    </div>
    <div class="the-images">
      <ul class="image-links">
        <!-- 重复5个列表项 -->
        <li 
          class="image-item"
          v-for="(item, index) in playlists"
          v-bind:key="index"
        >
          <div class="image-item-box">
            <div class="image-item-cover">
              <a href="#">
                <img 
                class="playlist-pic" 
                v-bind:src="item.imageUrl" 
                alt="playlist cover">
              </a>
            </div>
            <h4 class="image-title">
              <span class="image-title-txt"><a href="">{{ item.title }}</a></span>
            </h4>
            <div class="image-other">播放量：{{ item.playCount}}</div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
*{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "PingFang SC";
    }
    .the-body{
      margin: 0 auto;
      padding: 20px 15px;
      background-color: #f5f5f5;
    }
    .the-title{
      font-size: 24px;
      color: #333;
      margin-bottom: 10px;
      text-align: center;
      font-weight: 600;
    }
    .body-links{
      display: flex;
      gap: 10px;
      list-style: none;
      margin-bottom: 25px;
      padding: 20px 20px 10px 10px;
      flex-wrap: wrap;
      justify-content: center;
    }
    .body-links a{
      text-decoration: none;
      color: #333;
      font-size: 16px;
      white-space: nowrap;
      padding: 6px 18px;
      transition: all 0.3s;
    }
    .body-links a:hover{
      color:#2dd584;
      border-color: #2dd584;
    }
    .the-images{
      max-width: 1200px;
      margin: 0 auto;
    }
    .image-links{
      display: grid;
      grid-template-columns: repeat(5,1fr);
      gap: 15px;
      list-style: none;
      padding: 0 10px;
      justify-content: center;
    }
    .image-item-box{
      background: white;
      border-radius:12px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      transition: transform 0.3s;
      aspect-ratio: 1/1.1;
    }
    .image-item-box:hover{
      transform:translateY(-5px);
    }
    .image-item-cover{
      position: relative;
      padding-top: 74%;
      background-color: #eee;
    }
    .playlist-pic{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit:cover;
    }
    .image-title{
      padding: 12px;
      line-height: 1.3;
    }
    .image-title-txt a{
      color: #333;
      text-decoration: none;
      font-size: 14px;
      overflow: hidden;
      font-weight: 500;
    }
    .image-other{
      padding: 5px 10px 0px 10px;
      font-size: 12px;
      color: #666;
    }
</style>
