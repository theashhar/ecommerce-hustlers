import React from 'react'
import './NewArrivalHoodie.css';

import hoodie_arrival_img from '../Components/assets/hoodie_arrival_img.png';
import wings_icon from '../Components/assets/wings_icon.svg';


const NewArrivalHoodie = () => {
  return (
<>
  <h2 id='NewArrival-sec'>New Arrival</h2>
    <div className='New-arrival-box'>
      <img src={wings_icon} className='wing-icon'/>
      <img src={hoodie_arrival_img} className='hoodie-img'/>       
    </div>



    
</>
  )
}

export default NewArrivalHoodie

{/* <h2>New Arrival</h2>
<div className='New-arrival-box'>
  <div className='hoodie'>
  <img src={hoodie_arrival_img} className='hoodie-img'/> 
    <p></p>
  </div>
  <img src={wings_icon} />


</div> */}