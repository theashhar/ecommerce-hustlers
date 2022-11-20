import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import './Login.css'
import OAuth from '../Components/OAuth';

  
const Signup = () => {

  const[showPassword, setShowPassword] = useState(false); //for showing and hiding password
  const [formData, setFormData]= useState({
    name: '',
   email: '',
   password: '',
  });
  const { email, password } = formData;
  function onChange(e) {
   setFormData((prevState)=>({
     ...prevState, [e.target.id]: e.target.value,
   }))
  }
 

  return (
    <form>
    <div id="cover" className='w-full md:w-[67%] lg:w-[40%]'>
      <h2>Login</h2>
        
          <input type="text" id='name'  placeholder=" *Enter Your Name" value={email} onChange={onChange} required/>            
          <input type="email" id='email'  placeholder=" *Email" value={email} onChange={onChange} required/>            
          <input type={showPassword ? "text" : "password"} id='password' placeholder=" *Password" value={password} onChange={onChange} required/>
          {showPassword ?
          (<AiFillEyeInvisible className='absolute right-16 bottom-52' cursor='pointer' onClick={()=> setShowPassword((prevState)=>!prevState)} />):
          (<AiFillEye  className='absolute right-16 bottom-52' cursor='pointer' onClick={()=> setShowPassword((prevState)=>!prevState)} />)} 

          <div>
            <p2 >Have an account? 
              <Link to='/login' >Login</Link>
            </p2>
          </div>

          <button className="login-btn" type="submit" >Login</button>

          <div>
            <p2 id='orborder'>Or</p2>
          </div>

          <div className="alt-login">
            <OAuth/>

          </div>
          
         
    </div>
  </form> 
  )
}

export default Signup