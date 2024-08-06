<template>
  <h1>Add restaurant form</h1>
  <form @submit.prevent="handleSubmit">
    <label>Insert your new restaurant: </label>
    <input type="text" placeholder="Add restaurant" v-model="restaurantName" />
    <label>Insert owner: </label>
    <input type="text" placeholder="Add Owner" v-model="ownerName" />
    <button type="submit">Add</button>
  </form>
</template>

<script setup>
 import { ref } from 'vue'
 import { useDataBaseStore }  from '../stores/database'
 import { useRouter } from 'vue-router';

const databaseStore = useDataBaseStore()
const router = useRouter()  
const restaurantName = ref()
const ownerName = ref()

const  handleSubmit = async () =>{
    await databaseStore.addRestaurant(restaurantName.value,ownerName.value)
    router.push('/')
}
</script>
