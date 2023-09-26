import React, { useState, createContext } from "react";

export const CartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (item, quantity) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (itemIndex === -1) {
      setCart([...cart, { ...item, quantity }]);
    } else {
      const updatedCart = cart.map((cartItem, index) =>
        index === itemIndex
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      );
      setCart(updatedCart);
    }
  };
  
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartProvider;
