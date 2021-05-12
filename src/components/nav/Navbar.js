import React, { useState, useRef, useEffect } from "react";
import Burger from "./Burger";
import Menu from "./Menu";
import { useOnClickOutside, useSideNavMediaClose } from "../hooks";
import { Nav, NavLink, NavBtn, NavMenu, NavLogo } from "./styled/Navbar.styled";
import { ReactComponent as Logo } from "../../icons/logo.svg";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { resume } from "../content";

const Navbar = ({ active, handleScroll }) => {
  const node = useRef();

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("top");

  const handleMenuClick = (item) => {
    setOpen(false);
    handleScroll(item)
  };

  const prevScrollY = useRef(0);

  useOnClickOutside(node, () => setOpen(false));
  useSideNavMediaClose("768px", () => setOpen(false));

  const scrollListener = () => {
    const position = window.pageYOffset;
    const prevScrollPos = prevScrollY.current;
    let localScroll;
    if (position < 10) {
      localScroll = "top";
    } else if (position <= prevScrollPos) {
      localScroll = "up";
    } else if (position > prevScrollPos) {
      localScroll = "down";
    }

    prevScrollY.current = position;
    if (localScroll !== scroll) setScroll(localScroll);
  };

  const nodes = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const nodesMain = [useRef(null), useRef(null)];

  const logo = (
    <NavLogo>
      <Logo />
    </NavLogo>
  );

  const burger = (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} handleMenuClick={handleMenuClick} />
    </div>
  );

  const navButton = (
    <a href={resume} target="_blank" rel="noreferrer">
      <NavBtn>Resume</NavBtn>
    </a>
  );

  const navItems = ["About", "Work", "Contact", navButton];
  const navMain = [logo, burger];

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });

  return (
    <>
      <Nav scroll={scroll}>
        <TransitionGroup component={null}>
          {navMain.map((item, index) => (
            <CSSTransition
              key={index + 3}
              in={true}
              nodeRef={nodesMain[index]}
              appear={true}
              timeout={400}
              classNames={"fadeLogo"}
            >
              <div key={index + 3} ref={nodesMain[index]}>
                {item}
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
        <NavMenu>
          <TransitionGroup component={null}>
            {navItems.map((item, index) => (
              <CSSTransition
                key={item}
                in={true}
                nodeRef={nodes[index]}
                appear={true}
                timeout={1200}
                classNames={"fadeNav"}
              >
                {typeof item === "string" ? (
                  <NavLink
                    key={item}
                    ref={nodes[index]}
                    active={item === active}
                    onClick={() => handleScroll(item)}
                    activeStyle
                  >
                    {item}
                  </NavLink>
                ) : (
                  <div ref={nodes[index]} key={item}>
                    {item}
                  </div>
                )}
              </CSSTransition>
            ))}
          </TransitionGroup>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
