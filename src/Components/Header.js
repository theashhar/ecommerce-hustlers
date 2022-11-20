import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useLocation } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import Login from '../Components/Login';
import HustlersHeavenLogo from '../Components/assets/HustlersHeavenLogo.svg'
// import useStyles from './Headerstyle.js';



import './Header.css'

const Header = () => {
  // const classes = useStyles();
  return (
    <div >
   <AppBar position="fixed" className='appBar' color="inherit"  background-color= 'rgba(252, 252, 252, 0.6)' backdrop-filter='blur(7px)' height= '9%' >
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className='title' color="inherit">
          <img src={HustlersHeavenLogo} alt="Logo" className='HHlogo' /> 
          </Typography>
          <div className='grow' />

          <div className='button'>
            <Typography component={Link} to="/login" variant="h6"  element={Login } className='title' color="black">
              <p className='navtext'>Login</p>
            </Typography>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
          
        </Toolbar>
      </AppBar>
    </div>

);
  }

export default Header;