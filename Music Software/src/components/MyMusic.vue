<script setup>
import { ref, computed } from 'vue';
const userName = ref('Kevin');
const starNumber = ref(3);
const fanNumber = ref(1);

const tabs = ref(['我喜欢','我的已购','我创建的歌单','关注']);
const activeTab = ref(0);

const categories = ref([
  {
    name:'歌曲',count:888
  },
  {
    name:'歌单',count:2
  },
  {
    name:'专辑',count:32
  },
  {
    name:'视频',count:434
  },
]);
const activeCategory = ref(0);

//歌曲数据
const songs = ref([
  {
    imageUrl: "/pic10.jpg",
    title: '演员',
    artist: '薛之谦',
    album: '绅士',
    duration: '02:17',
    badges: ['VIP']
  },
  {
    imageUrl: "/pic11.jpg",
    title: '1.1',
    artist: '鹿晗',
    album: '1.1',
    duration: '03:28',
    badges: ['推荐'],
  },
  {
    imageUrl: "/pic12.jpg",
    title: '一个人想着一个人',
    artist: '艾比利',
    album: '一个人想着一个人（说唱版）',
    duration: '03:09',
    badges: ['推荐']
  },
  {
    imageUrl: "/pic13.jpg",
    title: '致爱 Your Song',
    artist: '鹿晗',
    album: '致爱 Your Song',
    duration: '03:13',
    badges: ['VIP']
  },
  {
    imageUrl: "/pic14.jpg",
    title: '多远都要在一起',
    artist: 'G.E.M. 邓紫棋',
    album: '新的心跳',
    duration: '03:37',
    badges: ['VIP']
  },
  {
    imageUrl: "/pic15.jpg",
    title: '我怀念的',
    artist: '孙燕姿',
    album: '逆光',
    duration: '04:49',
    badges: ['VIP']
  },
  {
    imageUrl: "/pic16.jpg",
    title: '唯一',
    artist: 'G.E.M. 邓紫棋',
    album: '唯一',
    duration: '04:13',
    badges: ['VIP']
  },
  {
    imageUrl: "/pic17.jpg",
    title: '老男孩',
    artist: '筷子兄弟',
    album: '父亲',
    duration: '04:59',
    badges: ['VIP']
  },
  
]);

//当前选中的歌曲
const activeSongIndex = ref(null);
const isPlayingAll = ref(false);

//播放按钮状态
const playAllText = computed (() => isPlayingAll.value ? '暂停播放': '播放全部' );

//切换标签
const switchTab = (index) =>{
  activeTab.value = index;
};
//切换分类
const switchCategory = (index) => {
  activeCategory.value = index;
};
//选择歌曲
const selectSong = (index) =>{
  activeSongIndex.value = index;
};
//切换播放状态
const togglePlayAll = ()=>{
  isPlayingAll.value = !isPlayingAll.value;

  if(isPlayingAll.value){
    console.log('开始播放全部歌曲');
  }else{
    console.log('暂停播放');
  }
  setTimeout(()=>{
    isPlayingAll.value = false;
  },3000)
};
</script>

<template>
  <div id="app">
    <div class="container">
      <div class="background-container">
        <div class="background-overlay"></div>
        <div class="user-picture">
          <img src="https://miaobi-lite.bj.bcebos.com/miaobi/5mao/b%276Jyh56yU5bCP5paw5oOF5L6j5aS05YOPXzE3Mjg5NDgyODguMjQ1MjcyMg%3D%3D%27/0.png" alt="用户头像">
          <h1 class="user-name">{{ userName }}</h1>
          <div class="user-stats">
            <div class="stat-star">
              <div class="stat-number">{{ starNumber }}</div>
              <div class="stat-label">关注</div>
            </div>
            <div class="stat-fan">
              <div class="stat-number">{{ fanNumber }}</div>
              <div class="stat-label">粉丝</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="tabs">
        <ul class="tabs-links">
          <li 
            v-for="(tab, index) in tabs" 
            v-bind:key="index"
            v-bind:class="{ active: activeTab === index }"
            v-on:click="switchTab(index)"
          >
            {{ tab }}
          </li>
        </ul>
      </div>
      
      <div class="content-container">
        <div class="likes">
          <ul class="likes-links">
            <li 
              v-for="(category, index) in categories" 
              v-bind:key="index"
              v-bind:class="{ active: activeCategory === index }"
              v-on:click="switchCategory(index)"
            >
              {{ category.name }} <span class="stats-badge">{{ category.count }}</span>
            </li>
          </ul>
        </div>
        
        <div class="takes">
          <button class="action-btn player" 
          v-on:click="togglePlayAll">
            <i v-bind:class="playAllIcon"></i> {{ playAllText }}
          </button>
          <button class="action-btn adding">
            <i class="the-adding"></i> 添加到
          </button>
          <button class="action-btn download">
            <i class="the-download"></i> 下载
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
            <tr 
              v-for="(song, index) in songs" 
              v-bind:key="index"
              v-bind:style="{ backgroundColor: activeSongIndex === index ? 'rgba(255, 85, 0, 0.1)' : '' }"
              v-on:click="selectSong(index)"
            >
              <td>
                <div class="song-info">
                  <div>
                    <a>
                      <img 
                       class="song-cover"
                       v-bind:src="song.imageUrl">
                    </a>
                  </div>
                  <!-- <img class="song-cover" 
                  v-bind:src="imageUrl"></img> -->
                  <div class="song-details">
                    <div class="song-title">{{ song.title }} 
                      <span v-for="(badge, badgeIndex) in song.badges" 
                      v-bind:key="badgeIndex" class="badge">
                        {{ badge }}
                      </span>
                    </div>
                    <div class="song-artist">{{ song.artist }}</div>
                  </div>
                </div>
              </td>
              <td>{{ song.artist }}</td>
              <td class="album">{{ song.album }}</td>
              <td class="duration">{{ song.duration }}</td>
            </tr>
          </tbody>
        </table>       
      </div>
    </div>
  </div>
</template>

<style scoped>  
body{
  display: flex;
  color: #f0f0f0;
  min-height: 100vh;
  padding: 20px;
  justify-content: center;
  align-items: center;
  
}
.container{
  width: 100%;
  max-width: 1200px;
  background: rgb(255, 255, 255);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}   
.background-container{
  position: relative;
  height: 280px;
  background: url('/pic18.jpg') center/cover no-repeat;
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
  border: 4px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
}   
.user-name{
  font-size: 28px;
  margin: 15px 0;
  font-weight: 600;
  text-shadow: 0 2px 8px rgba(91, 84, 84, 0.5);
  color: white;
}  
.user-stats{
  display: flex;
  gap: 25px;
  margin-top: 10px;
} 
.stat-item{
  text-align: center;
}
   
.stat-number{
  font-size: 22px;
  font-weight: 700;
  color: white;
}
.stat-star{
  text-align: center;
}
.stat-fan{
  text-align: center;
  margin-left: 45px;
}   
.stat-label {
  font-size: 14px;
  color: #aaa;
}
.tabs{
  background: rgba(255, 255, 255, 0.9);
}   
.tabs-links {
  display: flex;
  list-style: none;
  border-bottom: 1px solid rgba(107, 102, 102, 0.1);
}
.tabs-links li {
  padding: 18px 25px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}   
.tabs-links li:hover{
  color: #2dd584;
}  
.tabs-links li.active{
  color: #2dd584;
  border-bottom: 3px solid #16d378;
}   
.content-container {
  padding-left: 30px;
  padding-top: 5px;
}  
.likes-links {
  display: flex;
  list-style: none;
  gap: 35px;
  margin-bottom: 25px;
  padding: 0 10px;
  border-bottom: 1px solid #efe3e3;
}   
.likes-links li {
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding-bottom: 5px;
  position: relative;
}   
.likes-links li:hover {
  color: #2dd584;
}
.likes-links li.active{
  color: #2dd584;
  border-bottom: 2px solid #2dd584;
} 
.takes{
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}   
.action-btn {
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
.player {
  background: #2dd584;
  color: white;
}
.player:hover {
  background: #2dd584;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(210, 131, 92, 0.4);
}    
.adding, .download {
  background: #faf5f5;
  color: #1f1e1e;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.adding:hover, .download:hover {
  background: rgba(112, 103, 103, 0.15);
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
  border-bottom: 1px solid rgba(116, 32, 32, 0.1);
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
  color: black;
}
    
.duration {
  color: black;
}
    
.album {
  color: rgb(11, 11, 11);
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
  background: rgba(224, 191, 191, 0.1);
  color: #aaa;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
  margin-left: 8px;
}    
.highlight {
  color: #ff9966;
}
</style>