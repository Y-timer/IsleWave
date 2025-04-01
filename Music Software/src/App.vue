<script>
import SubNav from './components/HomePage/SubNav.vue';
import TheHeader from './components/HomePage/TheHeader.vue';
import TheBody from './components/HomePage/TheBody.vue';

export default{
  components:{
    TheHeader,
    SubNav,
    TheBody
  }
}
</script>

<template>
  <div class="page-transition">
    <TheHeader />
    <SubNav />
    <TheBody />
  </div>
</template>

<style>
</style>
