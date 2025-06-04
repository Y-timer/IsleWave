<script setup>
import { ref } from 'vue';

</script>

<template>
  <div class="container">
    <div class="background-container">
      <div class="background-overlay"></div>
      <div class="user-picture">
        <img src="https://miaobi-lite.bj.bcebos.com/miaobi/5mao/b%276Jyh56yU5bCP5paw5oOF5L6j5aS05YOPXzE3Mjg5NDgyODguMjQ1MjcyMg%3D%3D%27/0.png" alt="用户头像">
        <h1 class="user-name">Kevin</h1>
        <div class="user-stats">
          <div class="stat-star">
            <div class="stat-number">3</div>
            <div class="stat-label">关注</div>
          </div>
          <div class="stat-fan">
            <div class="stat-number">1</div>
            <div class="stat-label">粉丝</div>
          </div>
        </div>
      </div>
    </div>

    <div class="tabs">
      <ul class="tabs-links">
        <li class="active">我喜欢</li>
        <li>我的已购</li>
        <li>我创建的歌单</li>
        <li>关注</li>
        <li>粉丝</li>
        <li>我上传的视频</li>
      </ul>
    </div>

    <div class="content-container">
      <div class="likes">
        <ul class="likes-links">
          <li class="active">歌曲<span class="stats-badge">227</span></li>
          <li>歌单<span class="stats-badge">1</span></li>
          <li>专辑<span class="stats-badge">1</span></li>
          <li>视频<span class="stats-badge">1</span></li>
        </ul>
      </div>
    </div> 

    <div class="takes">
      <button class="action-btn player">
        <i class="fas fa-play"></i> 播放全部
      </button>
      <button class="action-btn adding">
        <i class="fas fa-play"></i>添加到
      </button>
      <button class="action-btn download">
        <i class="fas fa-download"></i>下载
      </button>
    </div>

    <table class="music-table">
      <thead>
        <tr>
          <th>歌曲</th>
          <th>歌手</th>
          <th>专辑</th>
          <th>时长</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="song-info">
              <div class="song-cover"></div>
              <div class="song-details">
                <div class="song-title">
                  小宇
                  <span class="badge">推荐</span>
                </div>
                <div class="song-artist">
                  蓝心羽
                </div>
              </div>
            </div>
          </td>
          <td>
            小宇
          </td>
          <td class="album">xiao宇</td>
          <td class="duration">02:12</td>
        </tr>
        <tr>
          <td>
            <div class="song-info">
              <div class="song-cover" style="background: linear-gradient(45deg, #2193b0, #6dd5ed);"></div>
              <div class="song-details">
                <div class="song-title">勇气
                  <span class="badge">热播</span>
                </div>
                <div class="song-artist">面子</div>
              </div>
            </div>
          </td>
          <td>dsds</td>
          <td class="album">w</td>
          <td class="duration">03:33</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
.container{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;;
  width: 100%;
  max-width: 1200px;
  background: whitesmoke;
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  margin: 0 auto;
}
body{
  color: #f0f0f0;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;;
}
.background-container{
  position: relative;
  height: 280px;
  background: url('https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80') center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  text-align: center;
}
.background-overlay{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 15, 30, 0.7);
  z-index: 1;
}
.user-picture{
  position: relative;
  z-index: 2;
  text-align: center;
}
.user-picture img{
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border:4px solid rgba(255,255,255,0.2);
  box-shadow: 0 0 30px rgba(0,0,0,0.5);
}
.user-name{
  font-size: 28px;
  margin: 15px 0;
  font-weight: 600;
  color: rgb(234, 221, 221);
  text-shadow: 0 2px 8px rgba(255, 255, 255, 0.5);
}
.user-stats{
  display: flex;
  gap: 25px;
  margin-top: 10px;
  color: wheat;
}
.stat-star{
  text-align: center;
}
.stat-fan{
    text-align: center;
    margin-left: 45px;
}
.stat-number{
  font-size: 22px;
  font-weight: 700;
}
.stat-label{
  font-size: 14px;
  color: #aaa;
}
.tabs{
  background: rgba(255, 255, 255, 0.9);
  padding: 0 30px;
}
.tabs-links{
  display: flex;
  list-style: none;
  border-bottom: 1px solid;
}
.tabs-links li{
  padding: 18px 25px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  color: black;
}
.tabs-links li:hover{
  color: #2dd584;
}
.tabs-links li:active{
  color: #ff5500;
  border-bottom: 3px solid #ff5500;
}
.takes{
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}
.action-btn{
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  outline: none;
}
.player{
  background: linear-gradient(135deg, #ff5500, #ff8c00);
  color:white;
}
.player{
  background: linear-gradient(135deg, #ff6b00, #ff9d00);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 85, 0, 0.4);
}
.adding, .download {
  background: rgba(255, 255, 255, 0.1);
  color: #ddd;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.adding:hover, .download:hover {
  background: rgba(255, 255, 255, 0.15);
}   
.music-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}   
.music-table th {
  color: #aaa;
  font-weight: 500;
  text-align: left;
  padding: 15px 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 14px;
}   
.music-table td {
  padding: 15px 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 15px;
  transition: all 0.2s ease;
}    
.music-table tr:hover td {
  background: rgba(255, 255, 255, 0.05);
  color: #ff9966;
}  
.song-info {
  display: flex;
  align-items: center;
  gap: 15px;
}  
.song-cover {
  width: 45px;
  height: 45px;
  border-radius: 8px;
  object-fit: cover;
  background: linear-gradient(45deg, #ff9966, #ff5e62);
}   
.song-details {
  display: flex;
  flex-direction: column;
}
    
.song-title {
  font-weight: 500;
  margin-bottom: 3px;
}
    
.song-artist {
  font-size: 13px;
  color: #aaa;
}
    
.duration {
  color: #aaa;
}
    
.album {
  color: #ccc;
}
    
.badge {
  background: rgba(255, 85, 0, 0.2);
  color: #ff9966;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
  margin-left: 10px;
}
    
.stats-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  color: #aaa;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
  margin-left: 8px;
}
    
.footer {
  text-align: center;
  padding: 25px;
  color: #666;
  font-size: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  margin-top: 20px;
}
    
.highlight {
  color: #ff9966;
}
    
@media (max-width: 768px) {
  .background-container {
    height: 240px;
  }
      
  .tabs-links {
    overflow-x: auto;
  }
      
  .likes-links {
    gap: 20px;
    overflow-x: auto;
    padding-bottom: 10px;
    list-style: none;
    flex-wrap: wrap;
  }
      
  .takes {
    justify-content: center;
  }
      
  .music-table {
    display: block;
    overflow-x: auto;
  }
}
</style>