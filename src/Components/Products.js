import * as React from 'react'
import { Grid } from '@mui/material';

import './ProductsStyle.css';
import Product from './Product'
import display_hoodie2 from '../Components/assets/display_hoodie2.jpg';
import display_hoodie1 from '../Components/assets/display_hoodie1.jpg';

const product = [
  {id: 1, name:'black hoodie', description: 'High Quality Versatile Hoodie', price: '₹999', image: display_hoodie2,},
  {id: 2, name:'Blue hoodie', description: 'High Quality Versatile Hoodie', price: '₹899', image: display_hoodie1,},
  {id: 3, name:'Blue hoodie', description: 'High Quality Versatile Hoodie', price: '₹899', image: display_hoodie2,},
  {id: 4, name:'black hoodie', description: 'High Quality Versatile Hoodie', price: '₹999', image:display_hoodie1,},
  {id: 5, name:'Blue hoodie', description: 'High Quality Versatile Hoodie', price: '₹899', image:display_hoodie2,},
  {id: 6, name:'Blue hoodie', description: 'High Quality Versatile Hoodie', price: '₹899', image: display_hoodie1,},
  {id: 5, name:'Blue hoodie', description: 'High Quality Versatile Hoodie', price: '₹899', image:display_hoodie2,},
  {id: 6, name:'Blue hoodie', description: 'High Quality Versatile Hoodie', price: '₹899', image: display_hoodie1,},
]


const Products = () => {
return (
  <main className='content'>
    <Grid container jusify='centre' spacing={2}>
      {product.map((product) => (
        <Grid item key={product.id} xs={6} sm={6} md={4} lg={2 }>        
        <Product product={product} />
        </Grid>
      ))}
    </Grid>
    </main>
)  
}

export default Products