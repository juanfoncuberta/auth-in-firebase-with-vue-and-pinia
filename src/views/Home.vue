<template>
    <h1>Home</h1>
   {{ userStore.userData }}
</template>

<script setup>
import { useUserStore } from '../stores/userStore'

const userStore = useUserStore()
</script>