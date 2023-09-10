import React from "react";
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
  const { id } = useParams();
  const filteredProduct = productos.filter((producto) => producto.id == id);
  return (
    <div>
      {filteredProduct.map((p) => {
        return (
          <div key={p.id}>
          <Card ard maxW="sm" mt={10} bg="#E4E4D0" width="100vw" height="auto">
            <CardBody>
              <Image
                src={p.imagen}
                borderRadius="lg"
                width="100%"
                height="250px"
                />
              <Stack mt="6" spacing="2" fontSize="sm">
                <Heading size="md" color="#040D12" textAlign="center">
                  {p.nombre}
                </Heading>
                <Text color="#040D12" textAlign="center">
                  {p.descripcion}
                </Text>
                <Text color="#000000" fontSize="2xl" textAlign="center">
                  ${p.precio}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup>
                  <ItemCount />
              </ButtonGroup>
            </CardFooter>
          </Card>
      </div>
        );
      })}
    </div>
  );
};

export default ItemDetail;
