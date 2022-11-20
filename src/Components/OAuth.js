import React from 'react'
import './Login.css'
import {FcGoogle} from 'react-icons/fc'



const OAuth = () => {
  return (

     <button className="flex items-center justify-center w-50 bg-red-700 text-white rounded mr-2" >
        <FcGoogle className='mr-2' />  Continue with Google
     </button>
 
      )
}

export default OAuth