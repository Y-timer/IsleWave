<script setup>
import TopNav from '@/components/TopNav.vue';
import SubNav from '@/components/SubNav.vue';
import TheRecommendations from '@/components/TheRecommendations.vue';
import MusicCharts from '@/components/MusicCharts.vue';

</script>

<template>
  <div>
    <TopNav />
    <SubNav />
    <main>
      <TheRecommendations />
      <MusicCharts />
    </main>
  </div>
</template>