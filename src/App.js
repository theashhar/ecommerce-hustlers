import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react-dom';


import Products from './Components/Products';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Cart from './Components/Cart'; 
import Profile from './Components/Profile';
import PgFOF from './Components/PgFOF';
import ForgotPassword from './Components/ForgotPassword';
import Header from './Components/Header';


function App() {
  return (
    <BrowserRouter>
    <Header/>
        <Routes> 
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/home' element={<Home />}/>
          <Route exact path='/signup' element={<Signup />}/>
          <Route exact path='/login' element={<Login />}/>
          <Route exact path='/cart' element={<Cart />}/>
          <Route exact path='/forgot-password' element={<ForgotPassword />}/>
          <Route exact path='/userprofile' element={<Profile />}/>
          <Route exact path='*' element={<PgFOF />}/>
        </Routes>    
    </BrowserRouter>
  );
}

export default App;
