import React, { useState } from "react";
// import { IconContext } from "react-icons";
import { BiMenu, BiX } from "react-icons/bi";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MenuIcon,
  Menu,
  MenuItem,
  MenuLink,
  MenuItemBtn,
  MenuLinkBtn,
} from "./Navbar.styles";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div>
      {/* <IconContext.Provider value={{ color: "#fff" }}> */}
        <Nav>
          <NavbarContainer>
            <NavLogo to="/calendar">
              <NavIcon />
             calendar
            </NavLogo>
            <MenuIcon onClick={handleClick}>
              {click ? <BiX /> : <BiMenu />}
            </MenuIcon>

            <Menu onClick={handleClick} click={click}>
              <MenuItem>
                <MenuLink onClick={closeMenu} to="/">
                  Home
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink onClick={closeMenu} to="/income-app">
                  Income
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink onClick={closeMenu} to="/expense-app">
                  Expense
                </MenuLink>
              </MenuItem>
              <MenuItemBtn>
                <MenuLinkBtn to="/repository">
                  <button primary>Search Now</button>
                </MenuLinkBtn>
              </MenuItemBtn>
            </Menu>
          </NavbarContainer>
        </Nav>
      {/* </IconContext.Provider> */}
    </div>
  );
};

export default Navbar;