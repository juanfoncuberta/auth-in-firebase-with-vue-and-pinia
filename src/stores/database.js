import { query,collection,getDocs,where } from 'firebase/firestore/lite'
import { db } from '../firebaseConfig'
import { defineStore } from 'pinia'
import { auth } from '../firebaseConfig'
import { doc } from 'firebase/firestore'


export const useDataBaseStore = defineStore('database',
  {
    state: ()=> ({
       documents: []
    }),
    actions : {
       async getRestaurants() {
          try{
            const q =  query(collection(db,'restaurants'),where('userId','==',auth.currentUser.uid))
            const querySnapShot = await getDocs(q)
            querySnapShot.forEach(doc =>  this.documents.push({
              'id' : doc.id,
              ...doc.data()
            }))

           
            console.log("docs",this.documents)

          }catch(error){
            console.log("error getting restaurants :"+error.message)
          }finally{

          }


       }
    }
  }
)