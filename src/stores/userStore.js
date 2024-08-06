import { defineStore } from "pinia";
import { auth } from "../firebaseConfig"
import { createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { useDataBaseStore } from './database'



export const useUserStore = defineStore('userStore', {
  state:()=> ({
      userData: null,
      loadingUser:false,
      loadingSession:false
  }),
  getters:  {
   
  },
  actions: {
      async signupUser(email,password) {
        try {
          this.loadingUser = true
           const { user } = await createUserWithEmailAndPassword(auth,email,password)
          this.userData = {'email': user.email, 'uid': user.uid}
        } catch (error) {
            console.log(`Error signup user ${error.message}}`)
        }finally {
          this.loadingUser = false
        }
      },

      async loginUser(email,password){
        try {
          this.loadingUser = true
          const { user } = await signInWithEmailAndPassword(auth,email,password)
          this.userData = {'email': user.email, 'uid': user.uid}
       } catch (error) {
           console.log(`Error login user ${error.message}}`)
       } finally {
          this.loadingUser = false
       }
      },

      async logoutUser(){
        this.loadingUser = true
        const databaseStore = useDataBaseStore()
        
        signOut(auth).then(() => {
          this.userData = null;
          databaseStore.$reset()
        }).catch((error) => {
          console.log(`Error logout user ${error.message}}`)
        }).finally(()=>{
          this.loadingUser = false
        });
        
      },
      currentUser() {
        return new Promise((resolve, reject) => {
            const unsuscribe = onAuthStateChanged(
                auth,
                (user) => {
                    if (user) {
                        this.userData = {
                            email: user.email,
                            uid: user.uid,
                        };
                    } else {
                        this.userData = null;
                    }
                    resolve(user);
                },
                (e) => reject(e)
            );
            unsuscribe();
        });
    },
  }

})