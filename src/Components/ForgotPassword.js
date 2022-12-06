// import { Password, TaskTwoTone } from '@mui/icons-material'
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {  getAuth, sendPasswordResetEmail } from 'firebase/auth';
import './Login.css'
import OAuth from '../Components/OAuth';
import { toast } from 'react-toastify';



const ForgotPassword = () => {

 const [email, setEmail]= useState('');

 function onChange(e) {
    setEmail(e.target.value);
  }
 
  async function onSubmit(e) {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success("Email sent successfully (please check spam folder))")
    } catch (error) {
      toast.error("could'nt send reset password") 
    }}
 
  return (
  <form onSubmit={onSubmit}>
    <div id="cover" className='w-full md:w-[67%] lg:w-[40%]'>
      <h2>Forgot Password</h2>
        
          <input type="email" id='email'  placeholder=" *Email" value={email} onChange={onChange} required/>            


          <div className='NoAcc'>
            <p2 >Don't have an account? 
              <Link to='/signup' >Signup</Link>
            </p2>
            <p2>
            <Link to='/forgot-password' >Forgot Password</Link>
              </p2>
          </div>

          <button className="login-btn" type="submit" >Send Reset Password</button>

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

export default ForgotPassword