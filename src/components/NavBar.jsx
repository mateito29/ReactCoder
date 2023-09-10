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
            color="black"
            bg="#C4C1A4"
            border="1px solid black"
            boxShadow="0 0 .7rem"
            fontFamily="mono"
          >
            CATEGORIAS
          </MenuButton>
        </div>
        <MenuList
          className="menu-list"
          color="black"
          bg="#C4C1A4"
          border="1px solid black"
          boxShadow="0 0 .7rem"
          fontFamily="mono"
        >
          <Link to={`/categoria/${"Ollas Chicas"}`}>
          <MenuItem className="menu-item" bg="#C4C1A4">
            Ollas Chicas
          </MenuItem>
          </Link>
          <Link to={`/categoria/${"Ollas Medianas"}`}>
          <MenuItem className="menu-item" bg="#C4C1A4">
            Ollas Medianas
          </MenuItem>
          </Link>
          <Link to={`/categoria/${"Ollas Grandes"}`}>
          <MenuItem className="menu-item" bg="#C4C1A4">
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
