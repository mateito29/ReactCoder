import React from "react";
import { useState } from "react";
import { Button } from "@chakra-ui/react";

const ItemCount = () => {
  const [contador, setContador] = useState(0);
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
  const onAdd = () => {
    if (contador > 0) {
      alert(`Agregaste ${contador} ollas al carrito`);
    }
  };

  return (
    <div className="count-container">
      <Button onClick={onAdd} variant="solid" colorScheme="orange" bg="#000000">
        Agregar al Carrito
      </Button>
      <div className="item-container">
      <button className="item-count" onClick={sumarContador}>
        +
      </button>
      <p className="parrafo-count">{contador}</p>
      <button className="item-count" onClick={restarContador}>
        -
      </button>
      </div>
    </div>
  );
};

export default ItemCount;
