<template>
    <h1>Home</h1>
   {{ userStore.userData }}
</template>

<script setup>
import { useUserStore } from '../stores/userStore'
import { useDataBaseStore }  from '../stores/database'

const userStore = useUserStore()
const databaseStore = useDataBaseStore()

console.log(databaseStore.getRestaurants())
</script>
