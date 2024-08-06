import { query,collection,getDocs,where,addDoc } from 'firebase/firestore/lite'
import { db } from '../firebaseConfig'
import { defineStore } from 'pinia'
import { auth } from '../firebaseConfig'
// import { doc } from 'firebase/firestore'


export const useDataBaseStore = defineStore('database',
  {
    state: ()=> ({
       documents: [],
       loadingDoc: false
    }),
    actions : {   
       async getRestaurants() {
          try{
            if(this.documents.length !== 0)
                return
            this.loadingDoc = true
            const q =  query(collection(db,'restaurants'),where('userId','==',auth.currentUser.uid))
            const querySnapShot = await getDocs(q)
            querySnapShot.forEach(doc =>  this.documents.push({
              'id' : doc.id,
              ...doc.data()
            }))
          }catch(error){
            console.log("error getting restaurants :"+error.message)
          }finally{
            this.loadingDoc = false

          }


       },
       async addRestaurant(name,owner) {
        try{
          const restaurantData =  {
            name,
            owner,
            'userId': auth.currentUser.uid
        };
            const restauranteRef = await addDoc(collection(db,'restaurants'),restaurantData
           )
          this.documents.push({
            'id' : restauranteRef.id,
            ...restaurantData
          })
        }catch(error){
            console.log("Error adding restaurant to store")
            console.log(error)
          }finally{
            

        }
       }
    }
  }
)