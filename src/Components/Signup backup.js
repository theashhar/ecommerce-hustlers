import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../FirebaseConfigs'
import { collection, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import './Signup.css'

const Signup = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const navigate= useNavigate()
  const[errorMsg, setErrorMsg] = useState('')
  const[successMsg, setSuccessMsg] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();             //stops refreshing of the page 
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const initialcartvalue = 0
      console.log(user)

      addDoc(collection(db, "users"), {
        username: username, email: email, password: password, cart: initialcartvalue, uid: user.uid
       }).then(() => {
          setSuccessMsg(" Account successfully created. You'll now be redirected to login page.")
          setUsername('')
          setEmail('')
          setPassword('')
          setTimeout(() => {
            setSuccessMsg('')
            navigate('/login')
          }, 3000);
        })
        .catch((error) => { setErrorMsg(error.mesage)})
      })
      .catch((error) => {
        if (error.message === 'Firebase: Error (auth/invalid-email).') 
        {
          setErrorMsg('Please fill all required fields')
        }
        if (error.message === 'firebase: Error (auth/email-already-in-use).')
        { setErrorMsg('User already exists')
      }

  })
  }
  return (
  <div>
    <Navbar />
    <div className='signup-container'>
      <form className='signup-form' onSubmit={handleSubmit}>
        <p className='text-2xl'> Create Account</p>
        {successMsg &&<>
            <div className='success-msg'>
            {successMsg}
            </div></>
        }
        {errorMsg && <>
        <div className='error-msg'>
          {errorMsg}
        </div>
        </>}

        <label>Your Name</label>
        <input onChange={(e) => setUsername(e.target.value)} type='text' placeholder='First & Last Name' />  {/* on change is important for react-*/}

        <label>Email</label>
        <input onChange={(e) => setUsername(e.target.value)} type='email' placeholder='Enter your Email' /> 

        <label>Password</label>
        <input onChange={(e) => setUsername(e.target.value)} type='password' placeholder='Enter your Password' /> 

        <button type='submit'>Sign Up</button>

        <div>
          <span id='acc-exist-signup'>Already have an account?</span>
          <Link to ='/login'>Login</Link>
        </div>

      </form>

    </div>
   
  </div>

  )
}

export default Signup