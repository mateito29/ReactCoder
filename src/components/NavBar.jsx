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
            boxShadow="0 0 1rem rgba(0, 0, 0, 1);"
            fontFamily="mono"
            background={"transparent"}
          >
            CATEGORIAS
          </MenuButton>
        </div>
        <MenuList
          className="menu-list"
          color="black"
          bg="#fef7d5"
          border="1px solid black"
          boxShadow="0 0 1rem"
          fontFamily="mono"
        >
          <Link to={`/categoria/${"Ollas Chicas"}`}>
          <MenuItem className="menu-item" bg="#fef7d5">
            Ollas Chicas
          </MenuItem>
          </Link>
          <Link to={`/categoria/${"Ollas Medianas"}`}>
          <MenuItem className="menu-item" bg="#fef7d5">
            Ollas Medianas
          </MenuItem>
          </Link>
          <Link to={`/categoria/${"Ollas Grandes"}`}>
          <MenuItem className="menu-item" bg="#fef7d5">
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
