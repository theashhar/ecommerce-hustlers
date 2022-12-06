import {React, useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export function useAuthStatus() {
    const[loggedIn, setLoggedin] = useState(false)
    const[checkingStatus, setCheckingStatus] = useState(true)

useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setLoggedin(true)
            }
            setCheckingStatus(false)
        })
}, []);

  return { loggedIn, checkingStatus};
}
