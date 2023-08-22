import React from "react";
import {Menu,MenuButton,MenuList,MenuItem,} from '@chakra-ui/react'
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div>
      <Menu>
        <h3>OllasDeBarroCBA</h3>
        <MenuButton>
          Categorias
        </MenuButton>
        <MenuList>
          <MenuItem>Categoria A</MenuItem>
          <MenuItem>Categoria B</MenuItem>
          <MenuItem>Categoria C</MenuItem>
        </MenuList>
      </Menu>
      <CartWidget></CartWidget>
    </div>
  );
};

export default NavBar;
