<script>
import SubNav from './components/HomePage/SubNav.vue';
import TheHeader from './components/HomePage/TheHeader.vue';
import MusicCharts from './components/HomePage/MusicCharts.vue';
import TheRecommendations from './components/HomePage/TheRecommendations.vue';
export default{
  components:{
    TheHeader,
    SubNav,
    TheRecommendations,
    MusicCharts
  }
}
</script>

<template>
  <div class="page-transition">
    <TheHeader />
    <SubNav />
    <main class="main-content">
    <TheRecommendations />
    <MusicCharts />
    </main>
  </div>
</template>

<style>
</style>
