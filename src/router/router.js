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
    beforeEnter: requireAuth,
    name:'Home'
  },
  {
    path: '/Login', 
    component: () => import('../views/Login.vue'),
    name:'Login'
  },
  {
    path: '/Signup', 
    component: () => import('../views/SignUp.vue'),
    name:'Signup'
  },
  {
    path: '/restaurant/add', 
    component: () => import('../views/RestaurantForm.vue'),
    beforeEnter: requireAuth,
    name:'AddRestaurant'
  },
  {
    path: '/restaurant/edit/:id', 
    component: () => import('../views/RestaurantForm.vue'),
    beforeEnter: requireAuth,
    name:'EditRestaurant'
  },

  


]
const router = createRouter({
  history: createWebHistory(),
  routes
})



export default router