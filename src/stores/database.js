import { query,collection,getDocs,where,addDoc,deleteDoc,doc,getDoc,updateDoc} from 'firebase/firestore/lite'
import { db } from '../firebaseConfig'
import { defineStore } from 'pinia'
import { auth } from '../firebaseConfig'

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
       async getRestaurant(id){
        try {
          const restauranteRef = doc(db,'restaurants',id)
          const docRef = await getDoc(restauranteRef)
          this.checkPermissions(docRef)
          return docRef.data()

        } catch (error) {
              console.log("error getting restaurant")
              console.log(error)
        }
       },
       async addRestaurant(name,owner) {
        try{
          const restaurantData =  {
            name,
            owner,
            'userId': auth.currentUser.uid
          };
          const restauranteRef = await addDoc(collection(db,'restaurants'),restaurantData)
          this.documents.push({
            'id' : restauranteRef.id,
            ...restaurantData
          })
        }catch(error){
          console.log("Error adding restaurant to store")
          console.log(error)
        }
       },
       async updateRestaurant(id,name,owner){
        try {
          const restauranteRef = doc(db,'restaurants',id)
          const docRef = await getDoc(restauranteRef)       
          this.checkPermissions(docRef);
          const restaurant = {name,owner}
          console.log(restaurant,docRef)
          await updateDoc(restauranteRef,restaurant)
          this.documents = this.documents.map(item => item.id === id ? ({...item,name:name,owner:owner}): item)
            console.log(this.documents)
        } catch (error) {
          console.log("Error updating restaurant")
          console.log(error)
        }
       },
       async deleteRestaurant(id) {
          try {
              const restauranteRef = doc(db,'restaurants',id)
              const docRef = await getDoc(restauranteRef)       
              this.checkPermissions(docRef);
              await deleteDoc(restauranteRef)

              this.documents = this.documents.filter(item => item.id !== id)
          } catch (error) {
            console.log("Error deleting restaurant")
            console.log(error)
          }
       },
       checkPermissions(docRef){
        if(!docRef.exists())
          throw new Error('Inexistant doc')

        if(docRef.data().userId !== auth.currentUser.uid)
          throw new Error("Haven't permissions to do that")
       }
       
    }
  }
)