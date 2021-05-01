import React, { useLayoutEffect } from "react";
import { StyledMenu, MenuButton } from "./styled/Menu.styled";
import { bool } from "prop-types";

const Menu = ({ open, handleMenuClick }) => {
  const options = ["About", "Work", "Contact"];

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
        <MenuButton key={item} onClick={() => handleMenuClick(item)}>
          {item}
        </MenuButton>
      ))}
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
