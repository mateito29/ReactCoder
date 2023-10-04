import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import ItemCart from "./ItemCart";

const Cart = () => {
  const { cart, clearCart, totalPrice } = useContext(CartContext);
  if (cart.length === 0) {
    return (
      <div className="carrito-container">
        <h3 className="alerta-carrito">
          No hay productos en el carrito, agrega alguno aquí!.
        </h3>
        <Link to="/">
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
        </Link>
      </div>
    );
  }
  return (
    <div className="cart">
      <div className="cartCard">
        {cart.map((producto) => (
          <ItemCart key={producto.id} producto={producto} />
        ))}
      </div>
      <div>
        <p className="precioTotal">Su Total es: ${totalPrice()}</p>
      </div>
      <div className="limpiarBtn">
        <button className="buttonDelete" type="button" onClick={clearCart}>
          <span className="buttonDelete__text">VACIAR</span>
          <span className="buttonDelete__icon">
            <svg
              className="svg"
              height="512"
              viewBox="0 0 512 512"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path
                d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "32px",
                }}
              ></path>
              <line
                style={{
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeMiterlimit: 10,
                  strokeWidth: "32px",
                }}
                x1="80"
                x2="432"
                y1="112"
                y2="112"
              ></line>
              <path
                d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "32px",
                }}
              ></path>
              <line
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "32px",
                }}
                x1="256"
                x2="256"
                y1="176"
                y2="400"
              ></line>
              <line
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "32px",
                }}
                x1="184"
                x2="192"
                y1="176"
                y2="400"
              ></line>
              <line
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "32px",
                }}
                x1="328"
                x2="320"
                y1="176"
                y2="400"
              ></line>
            </svg>
          </span>
        </button>
      </div>
      <Link to={"/Form"}>
        <div className="finalizarCompra">
          <button className="goToForm">Finalizar Compra</button>
        </div>
      </Link>
    </div>
  );
};

export default Cart;
