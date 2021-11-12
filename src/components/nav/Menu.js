import React, { useLayoutEffect } from "react";
import { StyledMenu, MenuLink, MenuBtn } from "./styled/Menu.styled";
import { bool } from "prop-types";
import { RESUME } from "../../constants/links";

const Menu = ({ open, handleMenuClick, setMenuState }) => {
  const options = ["About", "Projects", "Contact"];

  const navButton = (
    <a href={RESUME} target="_blank" rel="noreferrer">
      <MenuBtn>Resume</MenuBtn>
    </a>
  );

  useLayoutEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setMenuState(true);
    } else {
      document.body.style.overflow = "auto";
      setMenuState(false);
    }
  }, [open, setMenuState]);

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
