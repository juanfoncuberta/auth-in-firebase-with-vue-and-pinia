import { defineStore } from "pinia";


export const useUserStore = defineStore('userStore', {
  state:()=> ({
      userData: 'userslogin@mysite.com'
  }),
  getters:  {
    userDataUpperCase(state) {
      return state.userData.toUpperCase()
    }
  },
  actions: {
    registerUser(name){
        this.userData = name
    }
  }

})