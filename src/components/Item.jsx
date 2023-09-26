import React from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Divider,
  Button,
  ButtonGroup,
  CardFooter,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div>
      <Card maxW="sm" mt={10} bg="#C8AE7D" width="100vw" height="auto">
        <CardBody>
          <Image
            src={producto.imagen}
            borderRadius="lg"
            width="100vw"
            height="auto"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md" color="#040D12" textAlign="center">
              {producto.nombre}
            </Heading>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup>
            <Link to={`/item/${producto.id}`}>
              <Button id="btn-detail">
                Detalle
              </Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Item;
