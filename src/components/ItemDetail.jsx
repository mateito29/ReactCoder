import React, { useContext, useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Image,
  Divider,
  Button,
  ButtonGroup,
  Heading,
  Text,
} from "@chakra-ui/react";
const ItemDetail = ({ producto }) => {
  const { addItem } = useContext(CartContext);
  const [goToCart, setGoToCart] = useState(false);
  const onAdd = (quantity) => {
    setGoToCart(true);
    addItem(producto, quantity);
  };
  return (
    <div className="item-detail">
      <Card maxW="sm" mt={10} bg="#C8AE7D" width="100vw" height="auto">
        <CardBody>
          <Image
            src={producto.imagen}
            borderRadius="lg"
            width="100%"
            height="250px"
          />
          <Stack mt="6" spacing="2" fontSize="sm">
            <Heading size="md" color="#040D12" textAlign="center">
              {producto.nombre}
            </Heading>
            <Text color="#040D12" textAlign="center">
              {producto.descripcion}
            </Text>
            <Text color="#000000" fontSize="2xl" textAlign="center">
              ${producto.precio}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup>
            {goToCart ? (
              <>
                <Link to="/cart">
                  <button className="btnGoToCart">Ir al carrito</button>
                </Link>
                <Link to="/">
                  <button className="btnGoToCart">Volver al inicio</button>
                </Link>
              </>
            ) : (
              <ItemCount initial={1} onAdd={onAdd} />
            )}
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ItemDetail;
