<template>
  <nav class="sub-nav">
    <div class="nav-container">
      <ul class="sub-nav-links">
        <li><a href="#" class="firstPage">首页</a></li>
        <li><a href="#" class="theSinger">歌手</a> </li>
        <li><a href="#" class="">排行榜</a></li>
        <li><a href="#" class="">分类歌单</a></li>
        <li><a href="#" class="">MV</a></li>
        <li><a href="#" class="">专辑</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.sub-nav{
  background: #fff;
  border-bottom: 1px solid #e1e1e2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.sub-nav .nav-container{
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: center;
}

.sub-nav-links{
  display:flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

.sub-nav-links li{
  position: relative;
  padding: 10px 40px;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.sub-nav-links a{
  color:#333;
  text-decoration: none;
  transition: color 0.2s;
}

.sub-nav-links a:hover,
.sub-nav-links .active{
  color: #2dd584;
}

.sub-nav-links .active::after{
  position: absolute;
  bottom:0;
  left: 0;
  right: 0;
  height: 3px;
  background: #2dd584;
}
</style>
