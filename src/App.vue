<script setup>
  import { onMounted,ref, watch } from 'vue';
  import { RouterLink, RouterView } from 'vue-router'
  import { useUserStore } from './stores/userStore'
  import { useRouter,useRoute } from 'vue-router';
  import { Button, Descriptions } from "ant-design-vue";
  const userStore = useUserStore()
  const route = useRoute()
  const router = useRouter()
  const logout = async() => {
    await userStore.logoutUser()  
    router.push('/login')  
  }
  const selectedKeys = ref(['Login']);

  watch(()=> route.name,()=>selectedKeys.value=[route.name])

</script>
<template>
  <a-layout class="layout">
    <a-layout-header v-if="!userStore.loadingSession">
      <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="Home"><router-link to="/" v-if="userStore.userData" >Home</router-link> </a-menu-item>
        <a-menu-item key="Login" v-if="!userStore.userData"><router-link to="/login">Login</router-link></a-menu-item>
        <a-menu-item key="Signup" v-if="!userStore.userData"><router-link to="/Signup">Signup</router-link> </a-menu-item>
        <a-menu-item key="AddRestaurant"  v-if="userStore.userData"><router-link to="/restaurant/add">Add Restaurant</router-link></a-menu-item>
        <a-menu-item key="Logout" @click="logout"  v-if="userStore.userData">Logout</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <div v-if="userStore.loadingSession">Loading</div>
        <router-view />
      </div>
  </a-layout-content> 
  </a-layout> 
</template>
<style scoped>
  /* .logo {
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
  } */
  .site-layout-content {
    min-height: 280px;
    padding: 24px;
    background: #fff;
  }
  #components-layout-demo-top .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
  }
  .ant-row-rtl #components-layout-demo-top .logo {
    float: right;
    margin: 16px 0 16px 24px;
  }

  [data-theme='dark'] .site-layout-content {
    background: #141414;
  }
</style>
