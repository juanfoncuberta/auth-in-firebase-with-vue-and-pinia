<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <router-link to="/"><img src="./assets/vue.svg" class="logo vue" alt="Vue logo" /></router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/Signup">Signup</router-link> |
  </nav>
  <h1>Welcome</h1>
  <router-view />
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
