import styled from "styled-components";
import { Button } from "../../../styles/common/Buttons";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.teal};
  height: 100vh;
  overflow: auto;
  position: absolute;
  top: 0;
  right: 0;
  padding: 30px;
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  width: 60%;
  z-index: 9;

  @media screen and (min-width: ${(props) => props.theme.xs}) {
    width: 40%;
  }

  @media screen and (min-width: ${(props) => props.theme.sm}) {
    transition: transform 0.3s ease-in-out;
    transform: translateX(100%);
  }

  a {
    font-size: 1.25rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.3rem;
    color: ${(props) => props.theme.darkNavy};
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: ${(props) => props.theme.navy};
    }
  }
`;

export const MenuLink = styled.button`
  background: none;
  border: none;
  margin: 0;
  cursor: pointer;
  font-size: 1.25rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.3rem;
  color: ${(props) => props.theme.darkNavy};
  text-decoration: none;
  transition: color 0.3s linear;

  &:hover {
    color: ${(props) => props.theme.navy};
  }
`;

export const MenuBtn = styled(Button)`
  color: ${(props) => props.theme.darkNavy};
  border: 1px solid ${(props) => props.theme.darkNavy};
  &:active {
    background-color: ${(props) => props.theme.darkNavyHover};
  }
`;
