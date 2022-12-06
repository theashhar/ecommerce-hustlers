import React from 'react'
// import { Grid } from '@mui/material';
import './ProductListing.css';
import CartComponent from './CartComponent'
import display_hoodie2 from '../Components/assets/display_hoodie2.jpg';
import display_hoodie1 from '../Components/assets/display_hoodie1.jpg';

// item  xs={6} sm={6} md={4} lg={2 }

const CartList = [
    {id: 1, name:'black hoodie', description: 'High Quality Versatile Hoodie', price: '₹999', image: display_hoodie2,},
    {id: 2, name:'Blue hoodie', description: 'High Quality Versatile Hoodie', price: '₹899', image: display_hoodie1,},
    {id: 3, name:'Blue hoodie', description: 'High Quality Versatile Hoodie', price: '₹899', image: display_hoodie2,},
    {id: 4, name:'black hoodie', description: 'High Quality Versatile Hoodie', price: '₹999', image:display_hoodie1,},
    {id: 5, name:'Blue hoodie', description: 'High Quality Versatile Hoodie', price: '₹899', image:display_hoodie2,},
    {id: 6, name:'Blue hoodie', description: 'High Quality Versatile Hoodie', price: '₹899', image: display_hoodie1,},
    {id: 7, name:'Blue hoodie', description: 'High Quality Versatile Hoodie', price: '₹899', image:display_hoodie2,},
    {id: 8, name:'Blue hoodie', description: 'High Quality Versatile Hoodie', price: '₹899', image: display_hoodie1,},
  ]

              //get each product from array above using product (map)
const ProductListing = () => {
  return (
   <main className='w-full overflow-hidden'>
        <div className='cartMainDiv'>
        { CartList.map((product) => (
          <div key={product.id} className='a'>
            <CartComponent product={product}  />
          </div>
        ))}

        </div>
   </main>
  )
}

export default ProductListing