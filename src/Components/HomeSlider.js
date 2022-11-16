import React from 'react'
import man_in_yellow_hoodie from '../Components/assets/man_in_yellow_hoodie.jpg'
import hustlers_heaven_fabric from '../Components/assets/hustlers_heaven_fabric.jpg';
import './HomeSlider.css'

const HomeSlider = () => {
  return (

      <div className='slider'>
        <div className='info'>
          <h1>Premium Collection</h1> 
          <p></p>
        </div>
      <img className='image' src={man_in_yellow_hoodie} alt="man in hoodie" id='homeimg1' />


    </div>
  )
}

export default HomeSlider