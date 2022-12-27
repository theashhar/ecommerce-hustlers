import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react-dom';
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Navbar from './Components/Navbar';
// import ProductsList from './Components/ProductsList';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Cart from './Components/Cart'; 
import Profile from './Components/Profile';
import PgFOF from './Components/PgFOF';
import ForgotPassword from './Components/ForgotPassword';
import PrivateRoute from './Components/PrivateRoute';
import ProductOverview from './Components/ProductOverview';
// import ProductList  from './Components/Product';


function App() {
  return (
    <BrowserRouter>
 
    <Navbar/>
        <Routes> 
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/home' element={<Home />}/>
          <Route exact path='/signup' element={<Signup />}/>
          <Route exact path='/login' element={<Login />}/>
          <Route exact path='/cart' element={<Cart />}/>
          <Route exact path='/product/:id' element={<ProductOverview />}/>
          <Route exact path='/forgot-password' element={<ForgotPassword />}/>
          <Route path='/userprofile' element={<PrivateRoute />}>
            <Route exact path='/userprofile' element={<Profile />}/>
          </Route>
          {/* <Route exact path='/productList' element={<ProductList />}/> */}
          <Route exact path='*' element={<PgFOF />}/>
        </Routes>    
    <Footer />
    <ToastContainer
position="bottom-center"
autoClose={2500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </BrowserRouter>
    
  );
}

export default App;
