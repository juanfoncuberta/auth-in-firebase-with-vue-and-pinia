<script setup>
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'


onMounted(() => {
  console.log(import.meta.env.VITE_JUAN_PRUEBA);
  console.log(import.meta.env.VITE_APP_ROOT_API)
  console.log(import.meta.env.VITE_SOME_KEYAS)

})

</script>

<template>
  <nav>
    <router-link to="/"><img src="./assets/vue.svg" class="logo vue" alt="Vue logo" /></router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/Signup">Signup</router-link> |
  </nav>
  <h1>Welcome</h1>
  <h2>%%VITE_JUAN_PRUEBA%%</h2>
  <h2>%%VITE_APP_ROOT_API%%</h2>
  <h2>%%VITE_SOME_KEYAS%%</h2>


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
