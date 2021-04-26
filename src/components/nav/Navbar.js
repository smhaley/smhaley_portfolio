import React, { useState, useRef, useEffect } from "react";
import Burger from "./Burger";
import { useOnClickOutside, useSideNavMediaClose } from "../hooks";
import Menu from "./Menu";
import { Nav, NavLink, NavBtn, NavMenu, NavLogo } from "./styled/Navbar.styled";

const Navbar = ({active}) => {
  const node = useRef();

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('top');

  const prevScrollY = useRef(0);

  useOnClickOutside(node, () => setOpen(false));
  useSideNavMediaClose("768px", () => setOpen(false));

  const scrollListener =  () => {

    const position = window.pageYOffset
    const prevScrollPos =  prevScrollY.current
    let localScroll
    if (position < 10){
      localScroll = 'top'
    } else if (position<=prevScrollPos){
      localScroll='up'
    } else if (position>prevScrollPos){
      localScroll='down'
    }

    prevScrollY.current = position;
    if (localScroll!==scroll)
      setScroll(localScroll)
  }
  
  useEffect(() => {
    window.addEventListener(
      "scroll",
      scrollListener 
    );
    return () =>
      window.removeEventListener(
        "scroll",
        scrollListener 
      );
  });

  const navItems = ['About', 'Work', 'Contact']

  return (
    <>
      <Nav scroll={scroll}>
        <NavLogo>
          <h1>sh</h1>
        </NavLogo>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <NavMenu>
          {navItems.map(item=><NavLink key = {item} active={item===active} activeStyle>{item}</NavLink>)}
          <NavBtn>Resume</NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
