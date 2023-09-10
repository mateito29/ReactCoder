import { Box, Divider, Flex } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
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
          <h1 className="carrito-numero">6</h1>
        </Box>
      </Flex>
    </div>
  );
};

export default CartWidget;
