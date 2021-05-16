import React from "react";
import { StyledBurger, BurgerContainer } from "./styled/Burger.styled";
import { bool, func } from "prop-types";

const Burger = ({ open, setOpen }) => {
  return (
    <BurgerContainer>
      <StyledBurger
        aria-label="menu burger"
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
    </BurgerContainer>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
