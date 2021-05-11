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
      height: var(--nav-scroll-height);
      transform: translateY(0px);
      background-color: ${(props) => props.theme.veryDarkTrans};
      box-shadow: 0 10px 30px -10px var(--navy-shadow);
    `}
  ${(props) =>
    props.scroll === "down" &&
    css`
      height: var(--nav-scroll-height);
      transform: translateY(calc(var(--nav-scroll-height) * -1));
      box-shadow: 0 10px 30px -10px var(--navy-shadow);
    `}
`;

export const NavLink = styled.li`
  color: ${(props) => (props.active ? props.theme.green : props.theme.light)};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 0.9em;

  &:hover {
    color: ${(props) => props.theme.lightGreen};
  }

  transition: 0.3s ease-in-out;
`;

export const NavMenu = styled.ul`
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

export const NavLogo = styled.div`
  color: ${(props) => props.theme.light};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-left: 2rem;
  height: 100%;
  font-size: 0.9em;

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
