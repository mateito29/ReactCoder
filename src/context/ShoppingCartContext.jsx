import React, { useState, createContext } from "react";
export const CartContext = createContext(null);
const ShoppingCartProvider = ({ children }) => {
  const { cart, setCart } = useState([]);

  const comision = "React en CoderHouse";

  return (
    <CartContext.Provider value={{ cart, setCart, comision }}>
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartProvider;
