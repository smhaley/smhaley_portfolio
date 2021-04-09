import React, { useState, useRef, useEffect } from "react";
import Burger from "./Burger";
import { useOnClickOutside, useSideNavMediaClose } from "../hooks";
import Menu from "./Menu";
import {Nav, NavLink, NavBtn, NavMenu, NavLogo} from "./styled/Navbar.styled";



const Navbar = () => {
  const node = useRef();

  const [open, setOpen] = useState(false);

  useOnClickOutside(node, () => setOpen(false));
  useSideNavMediaClose( "768px", ()=>setOpen(false)) 

  return (
    <>    
      <Nav>
        <NavLogo>
          <h1>sh</h1>
        </NavLogo>
        <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu  open={open} setOpen={setOpen}/>
        </div>
        <NavMenu>
          <NavLink activeStyle>About</NavLink>
          <NavLink activeStyle>Work</NavLink>
          <NavLink activeStyle>Experience</NavLink>
          <NavBtn>Contact</NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
