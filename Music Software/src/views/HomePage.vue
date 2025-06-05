<script setup>
import TheHeader from '@/components/TopNav.vue';
import SubNav from '@/components/SubNav.vue';
import TheRecommendations from '@/components/TheRecommendations.vue';
import MusicCharts from '@/components/MusicCharts.vue';

</script>

<template>
  <div>
    <TheHeader />
    <SubNav />
    <main>
      <TheRecommendations />
      <MusicCharts />
    </main>
  </div>
</template>