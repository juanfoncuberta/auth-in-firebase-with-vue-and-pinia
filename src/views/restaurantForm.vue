<template>
  <h1>Restaurant</h1>
  <form @submit.prevent="handleSubmit">
    <label>Restaurant name: </label>
    <input type="text" placeholder="Restaurant name" v-model="restaurantName" />
    <label>Owner: </label>
    <input type="text" placeholder="Owner" v-model="ownerName" />
    <button type="submit">{{buttonText}}</button>
  </form>
</template>

<script setup>
 import { onMounted, ref } from 'vue'
 import { useDataBaseStore }  from '../stores/database'
 import { useRouter,useRoute } from 'vue-router';


const databaseStore = useDataBaseStore()
const router = useRouter()  
const route = useRoute()
const restaurantName = ref()
const ownerName = ref()
const buttonText = ref('Add')
const editMode = ref(false)


const  handleSubmit = async () =>{

    if(!editMode.value)
      await databaseStore.addRestaurant(restaurantName.value,ownerName.value)
    else
      await databaseStore.updateRestaurant(route.params.id,restaurantName.value,ownerName.value)
    router.push('/')
}


onMounted(async ()=> {

  if(route.params.id){
       const data = await databaseStore.getRestaurant(route.params.id)
       ownerName.value = data.owner
       restaurantName.value = data.name
       buttonText.value = 'Edit'
       editMode.value = true
  }
})

</script>
