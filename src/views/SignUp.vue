<template>
  <div>
    <h1>Signup</h1>
    <button @click="userStore.registerUser('newUserEmail@mynewsite.com')">Change email</button>
  </div>
</template>

<script setup>
    import {useUserStore} from '../stores/userStore'
    const userStore = useUserStore()
</script>