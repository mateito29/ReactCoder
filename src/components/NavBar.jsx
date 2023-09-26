import { Link } from "react-router-dom";
import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import CartWidget from "./CartWidget";


const NavBar = () => {
  return (
    <div className="container">
      <div className="titulo-brand">
        <Link to={"/"}>
          <h3>OllasDeBarroCBA</h3>
        </Link>
      </div>
      <Menu className="menu-container">
        <div>
          <MenuButton
            className="menu-button"
            color="#EAC696"
            bg="#65451F"
            boxShadow="0 0 1rem rgba(0, 0, 0, 1);"
            fontFamily="mono"
          >
            CATEGORIAS
          </MenuButton>
        </div>
        <MenuList
          className="menu-list"
          color="#EAC696"
          bg="#65451F"
          border="1px solid black"
          boxShadow="0 0 10px"
          fontFamily="mono"
        >
          <Link to={`/categoria/${"Ollas Chicas"}`}>
          <MenuItem className="menu-item" bg="#65451F">
            Ollas Chicas
          </MenuItem>
          </Link>
          <Link to={`/categoria/${"Ollas Medianas"}`}>
          <MenuItem className="menu-item" bg="#65451F">
            Ollas Medianas
          </MenuItem>
          </Link>
          <Link to={`/categoria/${"Ollas Grandes"}`}>
          <MenuItem className="menu-item" bg="#65451F">
            Ollas Grandes
          </MenuItem>
          </Link>

        </MenuList>
      </Menu>
      <Link to={"/cart"}>
        <CartWidget />
      </Link>
    </div>
  );
};

export default NavBar;
