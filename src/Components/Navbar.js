import * as React from 'react'
import { Link, useNavigate, HashLink } from 'react-router-dom'
import './NavbarStyle.css'
import CartIcon from '../Components/assets/CartIcon.svg'
import UserIcon from '../Components/assets/UserIcon.svg'
import HustlersHeavenLogo from '../Components/assets/HustlersHeavenLogo.svg'


const Navbar = () => {
  
const Navigate = useNavigate();
  return (
    <div>
      <section id='header'>
      <img src={HustlersHeavenLogo} onClick={()=>Navigate('/')} alt="Logo" className='HHlogo'/>
        
          <ul id='navbar'>
            <li><Link to='/'> HOME</Link></li>
            <li><Link to='/'>PRODUCTS</Link></li>
            <li><Link to='/signup'>SIGNUP</Link></li>
            <Link to='/login'><li>LOGIN</li></Link>
            <Link to='/Cart'>
              <li className='cartIcon'>
                <img src={CartIcon} alt="no img" id='cartlogo'/>                
                <span className='cart-icon-css'>1</span>
              </li>
            </Link><Link to='/userprofile'>
              <li className='profile-icon'>
                <img src={UserIcon} alt="no img" id='User'/>
              </li>
            </Link>            


          </ul>
       
      </section>
      {/* <nav id='navbar'>
        
        <img src={HustlersHeavenLogo} alt="Logo" />
      

        <div className='cart-btn'>
          <ul className='components-list'>
            <Link to='/'> <li >HOME</li></Link>
            <Link to='/signup'><li>SIGNUP</li></Link>
            <Link to='/login'><li>LOGIN</li></Link>
            <Link to='/Cart'>
              <li>
                <img src={CartIcon} alt="no img" />
                <span className='cart-icon-css'>0</span>
              </li>
            </Link>
            <Link to='userprofile'>
              <li>
                <img src={UserIcon} className='profile-icon' />
              </li>
            </Link>
              

          </ul>
        </div>
        <div>


          

        </div>
      </nav> */}
    </div>
  )
}

export default Navbar