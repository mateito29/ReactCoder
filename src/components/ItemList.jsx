import React from "react";
import Item from "./Item";
import { Flex } from "@chakra-ui/react";
const ItemList = ({ productos }) => {

  return (
    <Flex
      flexWrap="wrap"
      justifyContent="space-around"
      alignItems="center"
      gap={4}
    >
       {productos.map((p) => {
        return <Item producto={p} key={p.id}/>;
      })} 
      </Flex>
  );
};

export default ItemList;
