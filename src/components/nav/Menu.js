import React, { useLayoutEffect } from "react";
import { StyledMenu, MenuLink, MenuBtn } from "./styled/Menu.styled";
import { bool } from "prop-types";

const Menu = ({ open, handleMenuClick }) => {
  const options = ["About", "Work", "Contact"];

  const navButton = <MenuBtn>Resume</MenuBtn>;

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
