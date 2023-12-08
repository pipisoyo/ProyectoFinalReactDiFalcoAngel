import React, { createContext, useState } from 'react';

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (itemId) => {
    return cart.some(item => item.id === itemId);
  };

  console.log(cart);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart(prev => [...prev, { ...item, quantity }]);
    } else {
      console.log("el producto fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, getTotalQuantity}}>
      {children}
    </CartContext.Provider>
  );
};