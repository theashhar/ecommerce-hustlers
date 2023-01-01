import { Password } from '@mui/icons-material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import './Login.css'
import OAuth from '../Components/OAuth';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';



const Login = () => {
 const[showPassword, setShowPassword] = useState(false); //for showing and hiding password
 const [formData, setFormData]= useState({
  email: '',
  password: '',
 });
 const { email, password } = formData;
 const Navigate= useNavigate();
 function onChange(e) {
  setFormData((prevState)=>({
    ...prevState, [e.target.id]: e.target.value,
  }));
 }
 async function onSubmit(e) {
  e.preventDefault()
  try {
    const auth = getAuth()
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    if(userCredential.user) {
      Navigate("/")
    }     
  } catch (error) {
    toast.error("Incorrect username or password")

 }}



  return (
  <form onSubmit={onSubmit} >
    <div id="cover" className='w-full md:w-[67%] lg:w-[40%]'>
      <h2>Login</h2>
        
          <input type="email" id='email'  placeholder=" *Email" value={email} onChange={onChange} required/>            
          <input type={showPassword ? "text" : "password"} id='password' placeholder=" *Password" value={password} onChange={onChange} required/>
          {showPassword ?
          (<AiFillEyeInvisible className='eyeiconLogin' cursor='pointer' onClick={()=> setShowPassword((prevState)=>!prevState)} />):
          (<AiFillEye  className='eyeiconLogin' cursor='pointer' onClick={()=> setShowPassword((prevState)=>!prevState)} />)} 

          <div className='NoAcc'>
            <p2 >Don't have an account? 
              <Link to='/signup' >Signup</Link>
            </p2>
            <p2>
            <Link to='/forgot-password' >Forgot Password</Link>
              </p2>
          </div>

          <button className="login-btn" type="submit" >Login</button>

          <div>
            <p2 id='orborder'>Or</p2>
          </div>

          <div className="alt-login">
            <OAuth/>
            {/* <div className="google"></div>                 */}
          </div>
          
         
    </div>
  </form> 
  )
}

export default Login