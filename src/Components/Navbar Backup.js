import * as React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import CartIcon from '../Components/assets/CartIcon.svg'
import UserIcon from '../Components/assets/UserIcon.svg'

const Navbar = () => {
  return (
    <nav>
      <Link to='/'><button className='btn btn-primary' >Home</button></Link>
      <Link to='/signup'><button className='btn btn-primary'>Signup</button></Link>
      <Link to='/login'><button className='btn btn-primary' >Login</button></Link>

      <Link to='/Cart'>
        <div className='cart-btn'>
          <img src={CartIcon} alt="no img" />
          <span className='cart-icon-css'>0</span>
        </div>
      </Link>
      
      <Link to='userprofile'>
        <img src={UserIcon} className='profile-icon' />
      </Link>
      
    </nav>
  )
}

export default Navbar


//new Header

<section id='header'>
<img src={HustlersHeavenLogo} alt="Logo" className='logo'/>

<div> 
  <ul id='navbarid'>
      <li><Link to='/'> HOME</Link></li>
      <li><Link to='/signup'>SIGNUP</Link></li>
      <li><Link to='/login'>LOGIN</Link></li>
      {/* <li id='cartIconList'>
        <Link to='/Cart'><img src={CartIcon} alt="no img" id='cartid'/>
          <span className='cart-icon'>0</span>            
        </Link>
      </li> */}


  </ul>
</div>


{/* <div>
  <ul id='navbarid'>
  <li><a href='/'>Home</a></li>
  <li><a href='/Signup'>Signup</a></li>
  <li><a href='/Login'>Login</a></li>
  <li><a href='/Cart'>Cart</a></li>
  <li><img src={CartIcon} alt="no img" />
          <span className='cart-icon-css'>0</span></li>
  <li><a href='/Cart'>Cart</a></li>
  </ul>

</div> */}




</section>  
