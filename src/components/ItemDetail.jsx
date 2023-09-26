import React, { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import ItemCount from "./ItemCount";
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
import { useParams } from "react-router-dom";

const ItemDetail = ({ productos }) => {
  const { addItem } = useContext(CartContext);
  function handleAddItem(quantity) {
    addItem(null, quantity);
  }
  return (
    <div>
      <Card maxW="sm" mt={10} bg="#C8AE7D" width="100vw" height="auto">
        <CardBody>
          <Image
            src={productos.imagen}
            borderRadius="lg"
            width="100%"
            height="250px"
          />
          <Stack mt="6" spacing="2" fontSize="sm">
            <Heading size="md" color="#040D12" textAlign="center">
              {productos.nombre}
            </Heading>
            <Text color="#040D12" textAlign="center">
              {productos.descripcion}
            </Text>
            <Text color="#000000" fontSize="2xl" textAlign="center">
              ${productos.precio}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup>
            <ItemCount handleAdd={handleAddItem} />
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ItemDetail;
