import React from 'react'
import ProductsList from './ProductsList.js'
// import Navbar from './Navbar.js';
import HomeSlider from './HomeSlider.js'
import USP from './USP.js'
import NewArrivalHoodie from './NewArrivalHoodie.js'


const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <HomeSlider />
      <USP />
      <NewArrivalHoodie />
      <ProductsList />
    </div>
    


  )
}

export default Home