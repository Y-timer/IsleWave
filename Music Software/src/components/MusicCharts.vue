<script setup>
</script>


<template>
  <nav class="the-charts">
    <div class="the-title">
      <h1 class="TheCharts">排行榜</h1>
    </div>
    <div class="top-title-container">
    <div class="chart-card" id="hot-songs-chart">
      <dl class="hot-music-box">
        <dt class="hot-top">
          <div class="hot-music-top">热歌榜</div>
        </dt>
        <dd class="hot-music-list">
          <ul>
            <li class="the-list">
              <span class="the-num">1</span>
              <a href="#">成都</a>
            </li>
            <li class="the-list">
              <span class="the-num">2</span>
              <a href="#">跳楼机</a>
            </li>
            <li class="the-list">
              <span class="the-num">3</span>
              <a href="#">唯一</a>
            </li>
            <li class="the-list">
              <span class="the-num">4</span>
              <a href="#">舍得</a>
            </li>
            <li class="the-list">
              <span class="the-num">5</span>
              <a href="#">瞬</a>
            </li>
          </ul>
        </dd>
      </dl>
    </div>
    <div class="chart-card" id="new-releases-chart">
      <dl class="the-new-music">
        <dt class="new-music-title">
          <div class="new-music-top">新歌榜</div>
        </dt>
        <dd class="new-music-list">
          <ul>
            <li class="the-list">
              <span class="the-num">1</span>
              <a href="#">一点</a>
            </li>
            <li class="the-list">
              <span class="the-num">2</span>
              <a href="#">心跳</a>
            </li>
            <li class="the-list">
              <span class="the-num">3</span>
              <a href="#">造句</a>
            </li>
            <li class="the-list">
              <span class="the-num">4</span>
              <a href="#">烟火里的尘埃</a>
            </li>
            <li class="the-list">
              <span class="the-num">5</span>
              <a href="#">座位</a>
            </li>
          </ul>
        </dd>
      </dl>
    </div>
    <div class="chart-card" id="the-rising-chart">
      <dl class="the-rising-music">
        <dt class="the-rising-top">
          <div class="rising-music-top">飙升榜</div>
        </dt>
        <dd class="rising-music-list">
          <ul>
            <li class="the-list">
              <span class="the-num">1</span>
              <a href="#">我想念</a>
            </li>
            <li class="the-list">
              <span class="the-num">2</span>
              <a href="#">如果可以</a>
            </li>
            <li class="the-list">
              <span class="the-num">3</span>
              <a href="#">我想念</a>
            </li>
            <li class="the-list">
              <span class="the-num">4</span>
              <a href="#">逆光</a>
            </li>
            <li class="the-list">
              <span class="the-num">5</span>
              <a href="#">烟火里的尘埃</a>
            </li>
          </ul>
        </dd>
      </dl>
    </div>
  </div>
</nav>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
.the-title {
  width: 100%;
  padding: 20px 0 10px;
  background: #ffffff;
  position: sticky;
  top: 0;
  z-index: 2;
}
.TheCharts{
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
  font-weight: 600;
}
.top-title-container {
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.the-charts{
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px 20px;
  background: #ffffff;
}
.chart-card{
  flex:1;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.hot-music-top, 
.new-music-top, 
.rising-music-top {
  padding: 16px 20px;
  font-size: 18px;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #eee;
}
.hot-music-list ul,
.new-music-list ul, 
.rising-music-list ul {
  list-style: none;
  padding: 10px 0;
}
.the-list{
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 1px solid #eee;
}
.the-list:last-child{
  border-bottom: none;
}
.the-num{
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  border-radius: 4px;
  background: #f0f0f0;
  color: #666;
  margin-right: 15px;
  font-size: 14px;
}
.the-list:nth-child(1) .the-num {
  background: #fe3a3a;
  color: white;
}

.the-list:nth-child(2) .the-num {
  background: #ff6b6b;
  color: white;
}

    .the-list:nth-child(3) .the-num {
      background: #ff9f9f;
      color: white;
    }

    .the-list a {
      text-decoration: none;
      color: #333;
      font-size: 15px;
      flex: 1;
    }

    .the-list a::after {
      content: attr(data-artist);
      display: block;
      color: #999;
      font-size: 12px;
      margin-top: 2px;
    }

</style>