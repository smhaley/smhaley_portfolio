import React, { useState, useRef } from "react";
import Burger from "./Burger";
import { useOnClickOutside } from "../hooks";
import Menu from "./Menu";
import {Nav, NavLink, NavBtn, NavMenu} from "./styled/Navbar.styled";


const Navbar = () => {
  const node = useRef();

  const [open, setOpen] = useState(false);
  useOnClickOutside(node, () => {
    setOpen(false)
  
  });

  return (
    <>    
      <Nav>
        <NavLink>
          <h1>sh</h1>
        </NavLink>
        <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu  open={open} setOpen={setOpen}/>
        </div>
        <NavMenu>
          <NavLink activeStyle>About</NavLink>
          <NavLink activeStyle>Work</NavLink>
          <NavLink activeStyle>Experience</NavLink>
          <NavLink activeStyle>Contact</NavLink>
          <NavBtn>Contact</NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
