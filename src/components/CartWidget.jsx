import { Box, Divider, Flex } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/ShoppingCartContext";

const CartWidget = () => {
  const {cart} = useContext(CartContext)
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <div>
      <Flex>
        <Box>
          <div className="carrito-icono">
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
        </Box>
        <Divider />
        <Box>
        <h1 className="carrito-numero">{totalQuantity}</h1>
        </Box>
      </Flex>
    </div>
  );
};

export default CartWidget;
