import { query,collection,getDocs } from 'firebase/firestore/lite'
import { db } from '../firebaseConfig'
import { defineStore } from 'pinia'


export const useDataBaseStore = defineStore('database',
  {
    state: ()=> ({
       documents: []
    }),
    actions : {
       async getRestaurants() {
          try{
            console.log("dentro")
              const q =  query(collection(db,'restaurants'))
              const querySnapShot = await getDocs(q)
              console.log("querysnapshot")
              console.log(querySnapShot)
              querySnapShot.forEach(doc => console.log(doc.data()))
          }catch(error){
            console.log("error getting restaurants :"+error.message)
          }finally{

          }


       }
    }
  }
)