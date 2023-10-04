import { useState, createContext } from "react";

export const CartContext = createContext(null);

const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((prod) => {
          return prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };
  const totalPrice = () => {
    return cart.reduce((accomulated, prod) => accomulated + prod.precio * prod.quantity, 0);
  };

  const totalProducts = () => {
    return cart.reduce((accomulated, prod) => accomulated + prod.quantity, 0);
  }
  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };
  const clearCart = () => {
    setCart([]);
  };
  const isInCart = (itemId) => {
    return cart.find((prod) => prod.id === itemId) ? true : false;
  };
  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, isInCart, totalPrice, totalProducts}}
    >
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartProvider;
