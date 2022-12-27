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
import { cartCountfn } from '../shopify';

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
            <li className='li'><HashLink  to='/#ProductSection' >PRODUCTS</HashLink></li>
            <li className='li'><Link to='/signup'>SIGNUP</Link></li>
            <Link to='/login'><li className='li'>LOGIN</li></Link>
            <a href='/Cart'>
            {/* <li className='cartIcon'>
               <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                <img src={CartIcon} alt="no img" id='cartlogo'/>
                <badge>{10}</badge>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <span style={{padding:10}}>Cart is Empty</span>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>

                </Dropdown.Menu>
               </Dropdown>
            </li> */}


              <li className='cartIcon'>
                <img src={CartIcon} alt="no img" id='cartlogo'/>                
                <span className='cart-icon-css'>{
                  cartCountfn()
                }</span>
              </li>
            </a><Link to='/userprofile'>
              <li className='profile-icon'>
                <img src={UserIcon} alt="no img" id='User'/>
              </li>
            </Link>
          </ul>
          

       <div className='mobileNav' >
        < GiHamburgerMenu onClick={()=> setShowNavbar(!showNavbar)} />
        {/* < AiOutlineClose onClick={()=> setShowNavbar(!showNavbar)}  /> */}
       </div>


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