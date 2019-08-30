import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import store from './store';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name:'login',
      component: Login
    },
    {
      path: '/signup',
      name:'signup',
      component: Signup
    }
  ]

  
})

router.beforeEach((to, from, next) => {
  store.dispatch('fetchAccessToken');
  store.dispatch('fetchLibrary')

  if (to.fullPath === '/') {
    if (!store.state.accessToken) {
      next('/login');
    }
  }
  if (to.fullPath === '/login') {
    if (store.state.accessToken) {
      
      next('/');
    }
  }
  next();
});
export default router;
