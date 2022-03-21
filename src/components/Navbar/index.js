import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { Routes, Route } from "react-router-dom";
import Home from "../../screens";
import Imprint from "../../screens/imprint";
import Logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/map" activeStyle>
            Map
          </NavLink>
          <NavLink to="/imprint" activeStyle>
            Impressum
          </NavLink>
        </NavMenu>
      </Nav>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/map" element={<Home />} />
      </Routes>
    </>
  );
};

export default Navbar;