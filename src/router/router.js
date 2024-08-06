import {createRouter, createWebHistory} from 'vue-router'
import {useUserStore} from '../stores/userStore'

const requireAuth = async (to, from, next) => {
  const userStore = useUserStore();
  userStore.loadingSession = true;
  const user = await userStore.currentUser();
  if (user) {
      next();
  } else {
      next("/login");
  }
  userStore.loadingSession = false;
};

const routes=  [
  {
    path: '/', 
    component: () => import('../views/Home.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/Login', 
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Signup', 
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/addRestaurant', 
    component: () => import('../views/AddRestaurant.vue')
  }

]
const router = createRouter({
  history: createWebHistory(),
  routes
})



export default router