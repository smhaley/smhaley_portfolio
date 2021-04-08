import styled from 'styled-components';
import {respondTo} from '../../../styles/mixins'

export const Nav = styled.nav`
background: #000;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1000px) / 2);
z-index: 10;
`;
export const NavLink = styled.nav`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&:hover {
  color: green;
}
&:active {
  color: yellow;
}
transition: 0.3s ease-in-out;
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;

@media screen and (max-width: 768px) {
  display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
background: #121136;
color: rgb(24, 236, 151);
font-size: 1em;
margin: 1em;
padding: 0.5em 1em;
border: 2px solid rgb(24, 236, 151);
border-radius: 3px;
transition: 0.3s ease-in-out;
&:hover {
  background-color: rgb(24, 236, 151, 0.1);
  // color: white;
}

@media screen and (max-width: 768px) {
  display: none;
}
`;