import React from "react";
import {Menu,MenuButton,MenuList,MenuItem,} from '@chakra-ui/react'
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="container">
      <div className="titulo-brand">
        <h3>OllasDeBarroCBA</h3>
      </div>
      <Menu className="menu-container">
        <MenuButton className="menu-button">
          Categorias
        </MenuButton>
        <MenuList className="menu-list">
          <MenuItem className="menu-item">Categoria A</MenuItem>
          <MenuItem className="menu-item">Categoria B</MenuItem>
          <MenuItem className="menu-item">Categoria C</MenuItem>
        </MenuList>
      </Menu>
      <CartWidget></CartWidget>
    </div>
  );
};

export default NavBar;
