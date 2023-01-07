import * as React from 'react'
import { useRef, useState  } from "react";
import { Link, useNavigate,} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import './NavbarStyle.css'

// import { RxHamburgerMenu } from 'react-icons/rx'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose, AiOutlineSmallDash } from 'react-icons/ai'
import CartIcon from '../Components/assets/CartIcon.svg'
import UserIcon from '../Components/assets/UserIcon.svg'
import HustlersHeavenLogo from '../Components/assets/HustlersHeavenLogo.svg'
import Dropdown from 'react-bootstrap/Dropdown';
import { cartCountfn } from './shopify.js';

const Navbar = () => {
  
// function GetCurrentUser()
const Navigate = useNavigate();
const navRef =useRef();
const[showNavbar, setShowNavbar] = useState(false); 


// const showNavbar = () => {
//   navRef.current.classList.toggle("responsive-nav");
// }



// const mobileNav = document.getElementById('mobileNav');
// const Nav = document.getElementById('navbar');
// if (mobileNav) {
//   mobileNav.addEventListener('click', () => {
//     Nav.classList.add('active');
//   })
// }


  return (
    <div>
      <section id='header'>
      <img src={HustlersHeavenLogo} onClick={()=>Navigate('/')} alt="Logo" className='HHlogo'/>
        
          <ul className={showNavbar ? 'navbar mobileNav': 'navbar'} >
            <li className='li'><Link to='/'> HOME</Link></li>
            <li className='li'><HashLink  to='/#NewArrival-sec' >PRODUCTS</HashLink></li>
            <li className='li'><Link to='/signup'>SIGNUP</Link></li>
            <Link to='/login'><li className='li'>LOGIN</li></Link>

            <a href='/Cart'>           
              <li className='cartIcon'>
                <img src={CartIcon} alt="no img" id='cartlogo'/>                
                <span className='cart-icon-css'>{
                  cartCountfn()
                }</span>
              </li>
            </a>
            <Link to='/userprofile'>
              <li className='profile-icon'>
                <img src={UserIcon} alt="no img" id='User'/>
              </li>
            </Link>
          </ul>
          

       <div className='mobileNav' >
            <a href='/Cart'>           
              <li className='cartIconMob'>
                <img src={CartIcon} alt="no img" id='cartlogo'/>                
                <span className='cart-icon-css'>{
                  cartCountfn()
                }</span>
              </li>
            </a>
        < GiHamburgerMenu onClick={()=> setShowNavbar(!showNavbar)} />
        {/* < AiOutlineClose onClick={()=> setShowNavbar(!showNavbar)}  /> */}
       </div>


      </section>
  
    </div>
  )
}

export default Navbar