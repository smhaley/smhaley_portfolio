import React from "react";
import { StyledBurger } from "./styled/Burger.styled";
import { bool, func } from "prop-types";

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger aria-label = 'menu burger' open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
