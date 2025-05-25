<template>
  <div id="UserPage">
    <div class="user-picture">
      <img src=".@/assets/images/pic9.jpg">
      <p class="user-name">Kevin</p>
    </div>
    <div class="tabs">
      <ul class="tabs-links">
        <li><a href="#">我喜欢</a></li>
        <li><a href="#">我创建的歌单</a></li>
        <li><a href="#">关注</a></li>
        <li><a href="#">粉丝</a></li>
      </ul>
    </div>
    <div class="likes">
      <ul class="likes-links">
        <li><a href="#">歌曲</a></li>
        <li><a href="#">歌单</a></li>
        <li><a href="#">专辑</a></li>
        <li><a href="#">视频</a></li>
      </ul>
    </div>
    <div class="takes">
      <div class="take-playAll">
        <img src="#">
        <button class="player">播放全部</button>
      </div>
      <div class="take-adding">
        <img src="#">
        <button class="adding">添加到</button>
      </div>
      <div class="take-downlode">
        <img src="#">
        <button class="doenlode">下载</button>
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
          <td>成都</td>
          <td>赵磊</td>
          <td>成都</td>
          <td>03:45</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>
<style scoped>
<style>
#UserPage {
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Microsoft YaHei', sans-serif;
  color: #333;
}

.user-picture {
  text-align: center;
  padding: 20px;
}

.user-picture img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.user-name {
  font-size: 18px;
  margin: 10px 0;
}

.tabs-links {
  display: flex;
  border-bottom: 1px solid #eee;
  padding: 0 20px;
}

.tabs-links li {
  padding: 12px 20px;
  font-size: 15px;
}

.tabs-links li a {
  color: #666;
  text-decoration: none;
}

.tabs-links li:hover {
  border-bottom: 2px solid #ff5500;
}

.likes-links {
  display: flex;
  padding: 10px 20px;
  gap: 25px;
}

.likes-links li a {
  color: #999;
  font-size: 14px;
}

.likes-links li a:hover {
  color: #ff5500;
}

.takes {
  padding: 20px;
}

.take-playAll {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.player {
  background: #ff5500;
  color: white;
  border: none;
  padding: 8px 25px;
  border-radius: 20px;
  cursor: pointer;
}

.adding, .doenlode {
  background: none;
  border: 1px solid #ddd;
  padding: 6px 15px;
  border-radius: 15px;
  margin: 0 10px;
}

.music-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.music-table th {
  color: #999;
  font-weight: normal;
  text-align: left;
  padding: 12px 5px;
  border-bottom: 1px solid #eee;
}

.music-table td {
  padding: 12px 5px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
}

/* 添加数据后的表格样式 */
.music-table tr:hover {
  background: #f8f8f8;
}

/* 数值标签样式 */
.tabs-links li::after {
  content: "3";  /* 根据实际数据修改 */
  color: #999;
  font-size: 12px;
  margin-left: 5px;
  vertical-align: super;
}

/* 歌单数量标记 */
.likes-links li:first-child::after {
  content: "| 17";
  color: #999;
  margin-left: 5px;
}
</style>
</style>