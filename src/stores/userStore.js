import { defineStore } from "pinia";
import { auth } from "../firebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth";
``

export const useUserStore = defineStore('userStore', {
  state:()=> ({
      userData: null
  }),
  getters:  {
   
  },
  actions: {
      async signupUser(email,password) {
        try {
           const { user } = await createUserWithEmailAndPassword(auth,email,password)
           console.log(user)
        } catch (error) {
            console.log(`Error signup user ${error.message}}`)
        }
      }
  }

})