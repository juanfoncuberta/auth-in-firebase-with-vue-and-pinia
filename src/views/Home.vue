<template>
    <h1>Home</h1>
    <p v-if="databaseStore.loadingDoc"></p>
    <ul v-else>
      <li v-for="item of databaseStore.documents" :key="item.id">
          {{ item.name }} - {{ item.owner  }}
      </li>
    </ul>
   {{ userStore.userData }}

</template>

<script setup>
import { useUserStore } from '../stores/userStore'
import { useDataBaseStore }  from '../stores/database'

const userStore = useUserStore()
const databaseStore = useDataBaseStore()
databaseStore.getRestaurants()
</script>
