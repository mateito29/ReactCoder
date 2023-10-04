import { Box, Divider, Flex } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/ShoppingCartContext";

const CartWidget = () => {
  const { totalProducts } = useContext(CartContext);
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
          <h1 className="carrito-numero">{totalProducts() || "0"}</h1>
        </Box>
      </Flex>
    </div>
  );
};

export default CartWidget;
