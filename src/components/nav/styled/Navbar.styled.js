import styled, { css } from "styled-components";
import { Button } from "../../../styles/common/Buttons";

export const Nav = styled.nav`
  background: ${(props) => props.theme.veryDarkTrans};
  height: 80px;
  display: flex;
  top: 0;
  justify-content: space-between;
  z-index: 10;
  position: fixed;
  width: 100%;
  transition: 0.4s ease-in-out;
  ${(props) =>
    props.scroll === "up" &&
    css`
      height: 70px;
      transform: translateY(0px);
      background-color: ${(props) => props.theme.veryDarkTrans};
      box-shadow: 0 8px 10px -8px rgba(0, 0, 0, 0.3););
    `}
  ${(props) =>
    props.scroll === "down" &&
    css`
      height: 70px;
      transform: translateY(-70px);
      box-shadow: 0 8px 10px -8px rgba(0, 0, 0, 0.3););
    `}
`;

export const NavLink = styled.li`
  color: ${(props) => (props.active ? props.theme.green : props.theme.light)};
  display: inline-block;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  font-size: 1em;
  &:hover {
    color: ${(props) => props.theme.lightGreen};
  }
  transition: 0.3s ease-in-out;
`;

export const NavMenu = styled.div`
  font-weight: 600;
  display: none;

  @media screen and (min-width: ${(props) => props.theme.sm}) {
    align-items: center;
    display: flex;
    transition: 0.2s ease-in-out;
  }
  @media screen and (min-width: ${(props) => props.theme.lg}) {
    margin-right: 3rem;
    transition: 0.2s ease-in-out;
  }
`;

export const NavLinks = styled.ul``;

export const NavLogo = styled.div`
  color: ${(props) => props.theme.light};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-left: 2rem;
  height: 100%;
  font-size: 0.9em;
  cursor: default;
  &:hover {
    color: ${(props) => props.theme.lightGreen};
  }
  transition: 0.3s ease-in-out;

  @media screen and (min-width: ${(props) => props.theme.sm}) {
    margin-left: 4rem;
  }
  @media screen and (min-width: ${(props) => props.theme.lg}) {
    margin-left: 6rem;
  }
`;

export const NavBtn = styled(Button)`
  margin: 2em;
`;

export const MenuContainer = styled.div`
  height: 100%;
`;
