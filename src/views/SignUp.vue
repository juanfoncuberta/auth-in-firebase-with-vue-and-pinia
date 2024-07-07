<template>
  <div>
    <h1>Signup</h1>
    <form @submit.prevent="handleSumbit">
      <input type="email" placeholder="placeYourEmmail@here.comm" v-model="email"/>
      <input type="password" placeholder="place your pass****" v-model="password"/>
      <button type="submit" :disabled="userStore.loading">Create user</button>
    </form>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useUserStore } from '../stores/userStore'
  import { useRouter } from 'vue-router';

  const userStore = useUserStore()
  const router = useRouter()  
  const email = ref()
  const password = ref()

  const handleSumbit = async() => {
    console.log("Loading")
    if(!email.value | password.value.length <= 6)
      return alert("Not email or password, please fill the fields")
    
    await userStore.signupUser(email.value,password.value)
    router.push('/')
      
  }

</script>