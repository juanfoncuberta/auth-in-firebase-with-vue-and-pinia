<template>
  <h1>Restaurants list</h1>
  <p v-if="databaseStore.loadingDoc"></p>
    <ul v-else>
      <li v-for="item of databaseStore.documents" :key="item.id">
          {{ item.name }} - {{ item.owner  }}
      </li>
    </ul>
</template>

<script setup>

import { useDataBaseStore }  from '../stores/database'

const databaseStore = useDataBaseStore()
databaseStore.getRestaurants()
</script>