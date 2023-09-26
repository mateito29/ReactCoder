import React from "react";
import { useState } from "react";
import Form from "./Form";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (producto, quantity) => {
    setCart([...cart, { producto, quantity }]);
  };
  return (
    <div>
      <h1 className="title-carrito">Mi carrito</h1>
      {cart.length > 0 ? (
        <Form />
      ) : (
        <Link to="/">
          <div className="carrito-container">
            <h3 className="alerta-carrito">
              No hay productos en el carrito, agrega alguno aquí!.
            </h3>
            <button className="btn" type="button">
              <span className="button__text">
                Agregar <br /> Productos
              </span>
              <span className="button__icon">
                <svg
                  className="svg"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="12" x2="12" y1="5" y2="19"></line>
                  <line x1="5" x2="19" y1="12" y2="12"></line>
                </svg>
              </span>
            </button>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Cart;
