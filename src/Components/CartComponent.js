import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@mui/material'
import { AddShoppingCart }  from '@mui/icons-material'
import {FaCartPlus } from 'react-icons/fa'


// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Placeholder from 'react-bootstrap/Placeholder';


import useStyles from './styles'
import './CartComponent.css';
import display_hoodie2 from '../Components/assets/display_hoodie2.jpg';

{/* <div className="d-flex justify-content-around">
        <Card style={{ width: '11rem' }}>
          <Card.Img variant="top" image={product.image} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              <p>Some quick example text </p>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card> 
      
      2
      
          <Card className='root'>
      <img src={product.image} id='productimg' />
        <CardMedia className='classes.media' title={product.name} />
        <CardContent>
            <div className='classes.cardContent'>
                <Typography variant="h5" gutterBottom>              
                    {product.name}
                </Typography>
                <Typography variant="h4" gutterBottom>              
                    {product.price}
                </Typography>
            </div>
            <Typography variant="h7" color='TextSecondary'>{product.description}</Typography>
        </CardContent>
        <CardActions disableSpacing className='classes.cardActions'>
            <IconButton aria-label='Add to Cart'>
                <AddShoppingCart />
            </IconButton>
        </CardActions>

    </Card>
  
  
  
  
  
  
  
  
       <img src={product.image} id='productimg' /> 
        <CardContent>
            <div className='classes.cardContent'>
                <h4 id='h4name'>              
                    {product.name}
                </h4>
                <span id='ProductPrice'>              
                    {product.price}
                </span>
            </div>
            <span id='ProductDescription'>              
                {product.description}
            </span>
            
        </CardContent>
        <CardActions disableSpacing className='classes.cardActions'>
            <IconButton aria-label='Add to Cart'>
                <AddShoppingCart />
            </IconButton>
        </CardActions>

  */}

const CartComponent = ({ product }) => {
    const classes = useStyles();
  return (


<section id='productContainer'>
  <div className='product'>
    <img src={product.image} id='productimg' /> 
    <div className='name'>
      <h4 id='h4name'>              
        {product.name}
      </h4>
      <span id='ProductPrice'>              
        {product.price}
      </span>
      <h5 id='ProductDescription'>              
        {product.description}
      </h5>
    </div > 
    <div id='shopping-cart'>
      <span>Add to Cart</span>
    <FaCartPlus />
    </div>
  </div>  
</section>
  )
}

export default CartComponent