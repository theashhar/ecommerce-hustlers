import React from 'react'
import { Link, useNavigate,} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import man_in_yellow_hoodie from '../Components/assets/man_in_yellow_hoodie.jpg'
import hustlers_heaven_fabric from '../Components/assets/hustlers_heaven_fabric.jpg';
import './HomeSlider.css'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

const HomeSlider = () => {
  const Navigate = useNavigate();
  return (

    <Carousel fade>
    <Carousel.Item >
      <img
        className="d-block w-100"
          src={man_in_yellow_hoodie} alt="man in hoodie" id='homeimg1' 


      />
      <Carousel.Caption className='info1' >
        <h1  >Premium Collection</h1>
        <Button variant="light"><HashLink  to='/#productsnavigate' >Shop Now</HashLink></Button>{' '}
        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={hustlers_heaven_fabric} alt="man in hoodie" id='homeimg1' 

      />

      <Carousel.Caption className='info1'>
        <h1 >High Quality Fabric</h1>
        <Button variant="light"><HashLink  to='/#productsnavigate' >Shop Now</HashLink></Button>{' '}
      </Carousel.Caption>
    </Carousel.Item>
   
  </Carousel>
);
}



//       <div className='slider'>
//         <div className='info'>
//           <h1>Premium Collection</h1> 
//           <p></p>
//         </div>
//       <img className='image' src={man_in_yellow_hoodie} alt="man in hoodie" id='homeimg1' />


//     </div>
//   )
// }

export default HomeSlider