<script>
import SubNav from './components/HomePage/SubNav.vue';
import TheHeader from './components/HomePage/TheHeader.vue';
import MusicCharts from './components/HomePage/MusicCharts.vue';
import TheRecommendations from './components/HomePage/TheRecommendations.vue';
import LoginPage from './components/HomePage/LoginPage.vue'
export default{
  components:{
    TheHeader,
    SubNav,
    TheRecommendations,
    MusicCharts,
    LoginPage
  },
  data(){
    return {
      showlogin:false
    }
  },
  methods:{
    handleLoginToggle(status){
      this.showlogin = status;
    }
  }
}

</script>

<template>
  <div class="page-transition">
    <template v-if="!showlogin">
      <TheHeader v-on:login-click="handleLoginToggle(true)"/>
      <SubNav />
      <main class="main-content">
      <TheRecommendations />
      <MusicCharts />
      </main>
    </template>
    <LoginPage v-else v-on:back="handleLoginToggle(false)" />
  </div>
</template>

<style>
</style>
