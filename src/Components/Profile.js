import {React, useState} from 'react'
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { auth } from '../FirebaseConfigs';
import { getAuth, signOut } from "firebase/auth";
import Button from 'react-bootstrap/Button';


// import './profile.css'
import './Login.css'


export default function Profile () {
const auth = getAuth()
const [formData, setFormData] = useState({
  //important to get the actual data of user. Note getAuth must be called (as called above)
  name: auth.currentUser.displayName ,
  email: auth.currentUser.email
  });
  const{name, email} = formData

//logout
const Navigate= useNavigate()
const handleLogout = () => {
  auth.signOut()
  .then(() => {                
    Navigate('/login')
  })
}

  return (
<>
    <section className='flex flex-col justify-center items-center'>
        <h2 className="text-center mt-6">Your Account</h2>
    
          <div id='accform' className='w-full xl:w-[50%] lg:w-[50%]  md:w-[70%]  mt-6 px-3 text-center '>
            <form>
              <input type="text" id="name" value={name} disabled className='mb-2' />
              <input type="email" id="email" value={email} disabled className='mb-2' />
            </form>
            <Button variant="danger" onClick={handleLogout}>Logout</Button>
          </div>
    </section>
</>
  )
}

