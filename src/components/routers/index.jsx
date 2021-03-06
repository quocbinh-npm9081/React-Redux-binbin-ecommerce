import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../home/Home';
import Products from '../products/Products';
import Product from '../product/Product';
import Cart from '../cart/Cart';
const Routers = () => {
    return (

        <Routes>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='/products/:id' element={<Product></Product>}></Route>
            <Route exact path='/products' element={<Products></Products>}></Route>
            <Route exact path='/home' element={<Home></Home>}></Route>
            <Route exact path='/React-Redux-binbin-ecommerce/' element={<Home></Home>}></Route>
            <Route exact path='/' element={<Home></Home>}></Route>
        </Routes>

    );
}

export default Routers;
