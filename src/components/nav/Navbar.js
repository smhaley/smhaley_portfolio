import React, { useState, useRef, useEffect, useCallback } from "react";
import Burger from "./Burger";
import { useOnClickOutside, useSideNavMediaClose } from "../hooks";
import Menu from "./Menu";
import { Nav, NavLink, NavBtn, NavMenu, NavLogo } from "./styled/Navbar.styled";

// const debounce = (fn, delay) => {
//   let timeoutId;
//   return function (...args) {
//     // if (timeoutId) {
//       clearTimeout(timeoutId);

//     timeoutId = setTimeout(() => {
//       fn(...args);

//       timeoutId = null;
//     }, delay);
//   // }
//   };
// };


// function debounce(func, wait, immediate) {
// 	var timeout;
// 	return function() {
// 		var context = this, args = arguments;
// 		var later = function() {
// 			timeout = null;
// 			if (!immediate) func.apply(context, args);
// 		};
// 		var callNow = immediate && !timeout;
// 		clearTimeout(timeout);
// 		timeout = setTimeout(later, wait);
// 		if (callNow) func.apply(context, args);
// 	};
// };
function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [] // Only re-call effect if value or delay changes
  );

  return debouncedValue;
}

const Navbar = () => {
  const node = useRef();

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('up');
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  const prevScrollY = useRef(0);

  // const debouncedPosition = useDebounce(prevScrollPos, 500);

  // console.log(prevScrollPos)

  // console.log(prevScrollY.current)

  useOnClickOutside(node, () => setOpen(false));
  useSideNavMediaClose("768px", () => setOpen(false));

  const scrollListener =  () => {
    
    const position = window.pageYOffset
    const prevScrollPos =  prevScrollY.current
    let localScroll
    if (position < 10){
      localScroll = 'top'
    } else if (position<prevScrollPos){
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
          <NavLink activeStyle>About</NavLink>
          <NavLink activeStyle>Work</NavLink>
          <NavLink activeStyle>Experience</NavLink>
          <NavBtn>Resume</NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
