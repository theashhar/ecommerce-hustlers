import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import './Login.css'
import OAuth from '../Components/OAuth';
import { getAuth, createUserWithEmailAndPassword, updateProfile, } from "firebase/auth";
import {db} from '../FirebaseConfigs'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';


const Signup = () => {

  const[showPassword, setShowPassword] = useState(false); //for showing and hiding password
  const [formData, setFormData]= useState({
    name: '',
   email: '',
   password: '',
  });
  const {name, email, password } = formData;
  const Navigate= useNavigate();
  // e- effect
  function onChange(e) {
   setFormData((prevState)=>({
     ...prevState, [e.target.id]: e.target.value,
   }))
  }


 async function onSubmit(e) {
  //to prevent refreshing of signup page
  e.preventDefault()
  try {
    const auth = getAuth()
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    updateProfile(auth.currentUser, 
      { displayName: name
      })
    const user = userCredential.user
    const initialcartvalue = 0;
    console.log(user);
    const  formDataCopy = {...formData}
    // delete formDataCopy.password
    formDataCopy.timestamp = serverTimestamp();

    await setDoc(doc(db, "users", user.uid), formDataCopy)
    //after user is added to database, he's directed to home page
    Navigate('/');
        } catch (error) {
          console.error(error);
          if (error.message == 'Firebase: Error (auth/email-already-in-use).')
          {
            toast.error('Email already exists'); 
            }
          else 
          {
            toast.error('Something went wrong');
          }
        }
 }


 
  return (
    <form onSubmit={onSubmit}>
    <div id="cover" className='w-full md:w-[67%] lg:w-[40%]'>
      <h2>SignUp</h2>
        
          <input type="text" id='name'  placeholder=" *Enter Your Name" value={name} onChange={onChange} />            
          <input type="email" id='email'  placeholder=" *Email" value={email} onChange={onChange} />            
          <input type={showPassword ? "text" : "password"} id='password' placeholder=" *Password" value={password} onChange={onChange} />
          {showPassword ?
          (<AiFillEyeInvisible className='eyeiconSignup' cursor='pointer' onClick={()=> setShowPassword((prevState)=>!prevState)} />):
          (<AiFillEye  className='eyeiconSignup' cursor='pointer' onClick={()=> setShowPassword((prevState)=>!prevState)} />)} 

          <div>
            <p2 >Have an account? 
              <Link to='/login' >Login</Link>
            </p2>
          </div>

          <button className="login-btn" type="submit" >Signup</button>

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