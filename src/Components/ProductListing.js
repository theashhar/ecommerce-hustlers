import React, { useEffect, useState } from 'react'
import './ProductListing.css';
import CartComponent from './CartComponent'
import { getAllProducts } from './shopify.js';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    getAllProducts().then((products) => {
      setProducts(products);
    });
  },[])
  return (
   <main className='w-full overflow-hidden'>
        <div className='cartMainDiv'>
        { products.map((product) => (
          <div key={product.id} className='ab'>
            <CartComponent product={product}  />
          </div>
        ))}
        </div>
   </main>
  )
}

export default ProductListing