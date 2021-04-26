import React, { useLayoutEffect } from "react";
import { StyledMenu } from "./styled/Menu.styled";
import { bool } from "prop-types";

const Menu = ({ open }) => {
  useLayoutEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <StyledMenu open={open}>
      <a href="/">About</a>
      <a href="/">Work</a>
      <a href="/">Contact</a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
