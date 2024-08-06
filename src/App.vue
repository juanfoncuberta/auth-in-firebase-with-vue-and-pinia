<script setup>
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from './stores/userStore'
import { useRouter } from 'vue-router';
const userStore = useUserStore()

const router = useRouter()
const logout = async() => {
  await userStore.logoutUser()  
  router.push('/login')  
}

</script>

<template>
  <div v-if="!userStore.loadingSession">
    <nav>
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      <router-link to="/" v-if="userStore.userData">Home</router-link> 
      <router-link to="/login"  v-if="!userStore.userData">Login</router-link> |
      <router-link to="/Signup" v-if="!userStore.userData">Signup</router-link> 
      <router-link to="/addRestaurant" v-if="userStore.userData">Add Restaurant</router-link> 
      <button @click="logout" v-if="userStore.userData">Logout</button>
    </nav>
    <router-view />
  </div>
  <div v-else>Loading</div>
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
