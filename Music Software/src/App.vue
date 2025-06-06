<script setup>
import { ref,watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const transitionName = ref('fade');

watch(route,(to,from)=>{
  if(from.meta?.loginOrSignup && to.meta?.loginOrSignup){
    transitionName.value = 'slide';
  }else{
    transitionName.value = to.meta?.transition || 'fade'
  }
});
</script>

<template>
  <div class="page-transition">
    <router-view v-slot="{ Component }">
      <transition v-bind:name="transitionName" mode="out-in">
        <component v-bind:is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
/* 过渡动画效果 */
.fade-enter-active,
.fade-leave-active,
.slide-enter-active,
.slide-leave-active{
  transition: all 0.4s ease;
}
.fade-enter-from,
.fade-enter-to{
  opacity: 0;
  transform: translateY(20px);
}
.slide-enter-from{
  transform: translateX(100%);
}
.slide-enter-to{
  transform: translateX(0);
}
.slide-leave-from{
  transform: translateX(0);
}
.slide-leave-to{
  transform: translateX(-100%);
  opacity: 0;
}
</style>
