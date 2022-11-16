import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@mui/material'
import { AddShoppingCart }  from '@mui/icons-material'


import useStyles from './styles'
// import './ProductStyle.css';
import display_hoodie2 from '../Components/assets/display_hoodie2.jpg';



const Product = ({ product }) => {
    const classes = useStyles();
  return (
    <Card className='classes.root'>
        <CardMedia className='classes.media' image={product.image} title={product.name} />
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
  )
}

export default Product