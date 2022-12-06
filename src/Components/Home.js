import { React, useEffect, useState } from 'react'

import ProductListing from './ProductListing.js'
import {auth, db} from '../FirebaseConfigs'
// import Navbar from './Navbar.js';
import HomeSlider from './HomeSlider.js'
import USP from './USP.js'
import NewArrivalHoodie from './NewArrivalHoodie.js'
import { collection, doc, getDocs, query, where } from 'firebase/firestore'


const Home = () => {

  function GetCurrentUser(){
        const [user, setUser] = useState('')
        const usersCollectionRef = collection(db, "users")
// use effect gives real time  changes
// checking is someone is logged in or not

        useEffect(()=> {
        auth.onAuthStateChanged(userlogged => {             // creating  userlogged variable ot check 
          if(userlogged){
            const getUsers = async ()=> {
              const q = query(collection(db, "users"), where("uid", "==", userlogged.uid))
              console.log(q)
              //getting data of user from database
              const data = await getDocs(q);
              setUser(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
          }  
          getUsers();

        }  
        else{
          setUser(null)
        }
        
     })
  },[])
  return user

  }

  const userlogged = GetCurrentUser();
  // if(userlogged)
  // {console.log(userlogged)}

  return (
    <div>
      
      <HomeSlider />
      <USP />
      <NewArrivalHoodie />
      <ProductListing />
    </div>
    


  )
}

export default Home