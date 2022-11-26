import React from 'react'
import './Login.css'
import {FcGoogle} from 'react-icons/fc'
import { toast } from 'react-toastify'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import {db} from '../FirebaseConfigs'
import { useNavigate } from 'react-router-dom';





const OAuth = () => {

   const Navigate= useNavigate()
// async coz it returns a promise
   async function onGoogleClick() {
      try {
         const auth = getAuth()
         const provider = new GoogleAuthProvider()
         const result = await signInWithPopup(auth, provider)        // signInWithPopups- fo google popup form firebase auth
         const user = result.user
         console.log(user);
         
         // checking the user in database
         
         const docRef = doc(db, "users", user.uid)
         const docSnap = await getDoc(docRef)

         if (!docSnap.exists()) {
            await setDoc(docRef, {
               name: user.displayName,       //refer from console for this
               email: user.email,
               timestamp:serverTimestamp(),
            });

         }
         Navigate('/');
      }

            catch (error) {
               toast.error("Can't authorize with Google")
               console.log(error);
            }
      
   }




  return (

     <button type='button' onClick={onGoogleClick} className="flex items-center justify-center w-50 bg-red-700 text-white rounded mr-2" >
        <FcGoogle className='mr-2' />  Continue with Google
     </button>
 
      )
}

export default OAuth