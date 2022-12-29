import React from 'react'
import {Link} from 'react-router-dom'
import {FaCartPlus } from 'react-icons/fa'
import {addtocart} from '../shopify'

import useStyles from './styles'
import './CartComponent.css';

const CartComponent = ({ product }) => {
  console.log(product)
    const classes = useStyles();
  return (


<section id='productContainer'>
  <div className='product'>
    <Link to={`/product/${product.id.split('gid://shopify/Product/')[1]}`} className="text-black no-underline">
      <img src={product.images[0].src} id='productimg' alt="product" /> 
      <div className='name'>
        <h4 id='h4name'>              
          {product.title}
        </h4>
        <span id='ProductPrice'>              
          ₹ {product.variants[0].price.amount}
        </span>
        <h5 id='ProductDescription'>              
          {product.description}
        </h5>
      </div > 
    </Link>
    <div id='shopping-cart' onClick={(e)=>{
      e.target.innerText = 'Added to Cart'
      addtocart(product)
    }}>
      <span>Add to Cart</span>
    <FaCartPlus />
    </div>
  </div>  
</section>
  )
}

export default CartComponent