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
  },
  {
    path: '/login',
    name: 'Login',
    component:LoginPage,
  },
  {
    path: '/signup',
    name: 'Signup',
    component:TheSignup
  },
  {
    path: '/mymusic',
    name: 'MyMusic',
    component:MyMusic
  }  
]

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;