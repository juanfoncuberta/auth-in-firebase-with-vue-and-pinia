<template>
  <h1>Restaurants list</h1>
  <p v-if="databaseStore.loadingDoc"></p>
    <ul v-else>
      <li v-for="item of databaseStore.documents" :key="item.id">
          {{ item.name }} - {{ item.owner  }} <button @click="editRestaurant(item.id)">Edit</button><button @click="databaseStore.deleteRestaurant(item.id)">Delete</button>
      </li>
    </ul>
</template>

<script setup>

import { useDataBaseStore }  from '../stores/database'
import { useRouter } from 'vue-router';
const router = useRouter()  

const editRestaurant = (id) => {
  router.push(`/restaurant/edit/${id}`)
};
const databaseStore = useDataBaseStore()
databaseStore.getRestaurants()
</script>