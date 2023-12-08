import React from 'react';
import { NavBar } from './componets/NavBar/NavBar';
import { ItemListContainer } from './componets/ItemListContainer/ItemListContainer';
import { ItemQuantitySelector } from './componets/ItemQuantitySelector/ItemQuantitySelector';
import { ItemDetallContainer } from './componets/ItemDetallContainer/ItemDetallContainer';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { CartProvider } from './Context/CartContext';
import { Cart } from './componets/Cart/cart';
import { Checkout } from './componets/Checkout/Checkout';



export const App = () => {
  return (
    <>
    <h2>Polirrubros Pi-Va-So</h2>

   
    <BrowserRouter>
    <CartProvider>
    <NavLink to="/">
       <img src="../public/logo.svg" alt="logo" width={"200px"} />
    </NavLink>
    <NavBar/>
    <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path="/category/:categoryId" element={<ItemListContainer />}/>
    <Route path="/item/:itemId" element={<ItemDetallContainer />}/>
    <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
    </CartProvider>
    </BrowserRouter>
    </>
  )
}
