import React from 'react'
import Products from './Products.js'

import HomeSlider from './HomeSlider.js'
import USP from './USP.js'
import NewArrivalHoodie from './NewArrivalHoodie.js'


const Home = () => {
  return (
    <div>
      <HomeSlider />
      <USP />
      <NewArrivalHoodie />
      <Products />
    </div>
    


  )
}

export default Home