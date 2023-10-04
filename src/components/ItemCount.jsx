import React from "react";
import { useState, useContext } from "react";
import { Button } from "@chakra-ui/react";
import { CartContext } from "../context/ShoppingCartContext";

const ItemCount = ({ initial, onAdd }) => {
  const [contador, setContador] = useState(initial);
  const sumarContador = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  };
  const restarContador = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };
  return (
    <div className="count-container">
      <div className="button" onClick={() => onAdd(contador)}>
        <div className="button-wrapper">
          <div className="text">Agregar</div>
          <span className="icon">
            <svg
              viewBox="0 0 16 16"
              className="bi bi-cart2"
              fill="currentColor"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
            </svg>
          </span>
        </div>
      </div>

      <div className="item-container">
        <button className="item-count" onClick={restarContador}>
          -
        </button>
        <p className="parrafo-count">{contador}</p>
        <button className="item-count" onClick={sumarContador}>
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
