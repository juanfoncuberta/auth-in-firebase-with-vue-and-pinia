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
    path: '/restaurant/add', 
    component: () => import('../views/RestaurantForm.vue')
  },
  {
    path: '/restaurant/edit/:id', 
    component: () => import('../views/RestaurantForm.vue')
  },

  


]
const router = createRouter({
  history: createWebHistory(),
  routes
})



export default router