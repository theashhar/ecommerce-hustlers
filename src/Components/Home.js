import React from 'react'
import ProductsList from './ProductsList.js'

import HomeSlider from './HomeSlider.js'
import USP from './USP.js'
import NewArrivalHoodie from './NewArrivalHoodie.js'


const Home = () => {
  return (
    <div>
      <HomeSlider />
      <USP />
      <NewArrivalHoodie />
      <ProductsList />
    </div>
    


  )
}

export default Home