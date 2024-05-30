import {createRouter, createWebHistory} from 'vue-router'

const routes=  [
  {
    path: '/', 
    component: () => import('../views/Home.vue')
  },
  {
    path: '/Login', 
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Signup', 
    component: () => import('../views/SignUp.vue')
  }

]
const router = createRouter({
  history: createWebHistory(),
  routes
})



export default router