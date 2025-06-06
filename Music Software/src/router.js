import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./components/LoginPage.vue";
import HomePage from "./views/HomePage.vue";
import TheSignup from "./components/SignupPage.vue";
import MyMusic from "./components/MyMusic.vue";

const routes = [
  {
    path: '/',
    name:'HomePage',
    component:HomePage,
    meta:{transition:'fade'}
  },
  {
    path: '/login',
    name: 'Login',
    component:LoginPage,
    meta:{
      transition:'slide',
      loginOrSignup: true
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component:TheSignup,
    meta:{
      transition:'slide',
      loginOrSignup: true
    }
  },
  {
    path: '/mymusic',
    name: 'MyMusic',
    component:MyMusic,
    meta:{transition:'fade'}
  }  
]

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;