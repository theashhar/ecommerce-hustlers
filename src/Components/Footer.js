import React from 'react'
import Iframe from 'react-iframe'

import {AiFillInstagram, AiFillFacebook } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'
import { Link, useNavigate,} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import './FooterStyle.css'

import HustlersHeavenLogoWhite from '../Components/assets/HustlersHeavenLogoWhite.svg'


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='footer-col'>
            <img src={HustlersHeavenLogoWhite} alt="Logo" className='footerlogo' />
            <ul className='socialIcon'>                         
              <li><MdLocationOn size={20} /></li>
              <li>KING'S PAVILLION, Kolkata, West Bengal, 700011</li>        
            </ul>
            <ul>
              <li><Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1076465191527!2d88.37742707462644!3d22.57507687948995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02765d2660ae53%3A0xb65ef6f384b0132e!2sKing&#39;s%20Pavillion!5e0!3m2!1sen!2sin!4v1670935478518!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
              </li>
            </ul>
          </div>
          <div className='footer-col'>
            <h5>COMPANY</h5>
            <ul>

              <Link to='/aboutus'><li> About</li></Link>
              <HashLink to='/aboutus'><li>Privacy Policy</li></HashLink>
              <HashLink to='/aboutus'><li>Return Policy</li></HashLink>
            </ul>
          </div>
          <div className='footer-col'>
            <h5>FOLLOW US</h5>
            <ul className='socialIcon'>
              <Link to='/'><li><AiFillInstagram  size={20} /></li></Link>
              <Link to='/'><li><AiFillFacebook size={20} /></li></Link>
            </ul>

          
          </div>
        </div> 
      </div>
     </footer>
  )
}

export default Footer