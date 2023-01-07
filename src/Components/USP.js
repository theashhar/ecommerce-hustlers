import React from 'react'
import stylish_design_icon from '../Components/assets/stylish_design_icon.svg'
import comfort_icon from '../Components/assets/comfort_icon.svg'
import premium_quality_icon from '../Components/assets/premium_quality_icon.svg'

import './USP.css' 

const USP = () => {
  return (
  <section className='service-bg'>  
    <div className='service-container'>
        <div className='s-box'>
            <img src= {stylish_design_icon} alt= 'Stylish Design' />
            <h3>Stylish Design</h3>
            {/* <p>Get Awesome Design</p> */}
        </div>
        <div className='s-box-centre'>
            <img src= {premium_quality_icon} alt= 'Premium Quality' />
            <h3>Premium Quality</h3>
            {/* <p>Get High Quality Fabric</p> */}
        </div>
        <div className='s-box'>
            <img src= {comfort_icon} alt= 'Heavenly Comfort' />
            <h3>Heavenly Comfort</h3>
            {/* <p>Get Comfort As You Desire</p> */}
        </div>
    </div>
  </section>
  )
}

export default USP