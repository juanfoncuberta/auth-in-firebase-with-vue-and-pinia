<template>
  <div>
    <h1>Login</h1>
    {{ userStore.userDataUpperCase }}
  </div>
</template>

<script setup>
    import {useUserStore} from '../stores/userStore'
    const userStore = useUserStore()
</script>
