import React from 'react'
import {AiFillInstagram, AiFillFacebook } from 'react-icons/ai'
import { Link, useNavigate,} from 'react-router-dom'
import './FooterStyle.css'

import HustlersHeavenLogoWhite from '../Components/assets/HustlersHeavenLogoWhite.svg'


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <d iv className='row'>
          <div className='footer-col'>
            <img src={HustlersHeavenLogoWhite} alt="Logo" className='footerlogo' />
          </div>
          <div className='footer-col'>
            <h5>COMPANY</h5>
            <ul>

              <Link to='/'><li> About</li></Link>
              <Link to='/'><li>Privacy Policy</li></Link>
              <Link to='/'><li>Return Policy</li></Link>
            </ul>
          </div>
          <div className='footer-col'>
            <h5>FOLLOW US</h5>
            <ul className='socialIcon'>
              <Link to='/'><li><AiFillInstagram size={20} /></li></Link>
              <Link to='/'><li><AiFillFacebook size={20} /></li></Link>
            </ul>
          </div>
        </d> 
      </div>
     </footer>
  )
}

export default Footer