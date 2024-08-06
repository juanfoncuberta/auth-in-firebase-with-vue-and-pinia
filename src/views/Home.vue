<template>
    <h1>Home</h1>
    <restaurantsList />
   {{ userStore.userData }}
</template>

<script setup>
import { useUserStore } from '../stores/userStore'
import restaurantsList from '../components/restaurantsList.vue';

const userStore = useUserStore()
</script>
