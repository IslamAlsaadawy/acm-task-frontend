import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import AddUser from './components/users/addUser';
import AddToCart from './components/users/Cart/addToCart';
import { RouterProvider,BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ViewCart from './components/users/Cart/viewCart';
import ViewProducts from './components/products/viewProducts';


function App() {

  return (

      <Router>
      <main>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<AddUser></AddUser>} />
          <Route path='/Addtocart' element={<AddToCart></AddToCart>} />
          <Route path = '/carts' element = {<ViewCart/>}/>
          <Route path = '/products' element = {<ViewProducts/>}/>


        </Routes>
        {/* <AddUser></AddUser> */}
        {/* <AddToCart></AddToCart> */}


      </main>
      </Router>
  );
}

export default App;
