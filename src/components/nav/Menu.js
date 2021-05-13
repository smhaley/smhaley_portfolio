import React, { useLayoutEffect } from "react";
import { StyledMenu, MenuLink, MenuBtn } from "./styled/Menu.styled";
import { bool } from "prop-types";
import { resume } from "../content";

const Menu = ({ open, handleMenuClick }) => {
  const options = ["About", "Projects", "Contact"];

  const navButton = (
    <a href={resume} target="_blank" rel="noreferrer">
      <MenuBtn>Resume</MenuBtn>
    </a>
  );

  useLayoutEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <StyledMenu open={open}>
      {options.map((item) => (
        <MenuLink key={item} onClick={() => handleMenuClick(item)}>
          {item}
        </MenuLink>
      ))}
      {navButton}
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
