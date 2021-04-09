import styled from 'styled-components';
import {respondTo} from '../../../styles/mixins'

export const Nav = styled.nav`
background: #000;
height: 70px;
display: flex;
justify-content: space-between;
/* padding: 0.5rem calc((100vw - 1000px) / 2); */
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
font-size: .9em;
&:hover {
  color: green;
}
&:active {
  color: yellow;
}
transition: 0.3s ease-in-out;
`;

export const NavMenu = styled.div`
/* padding: 0.5rem calc((100vw - 1000px) / 2) */
display: none;

@media screen and (min-width: 768px) {
    align-items: center;
    display: flex;
}
@media screen and (min-width: 1200px) {
  margin-right: 3rem;
  transition: 0.2s ease-in-out;
}
`;

export const NavLogo = styled.div`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
/* padding: 0 3rem; */
padding-left:2rem;

height: 100%;
cursor: pointer;
font-size: .9em;
&:hover {
  color: green;
}
&:active {
  color: yellow;
}
transition: 0.3s ease-in-out;


@media screen and (min-width: 768px) {
    margin-left:4rem;
}
@media screen and (min-width: 1200px) {
    margin-left:6rem;
}
`


export const NavBtn = styled.nav`
display: flex;
align-items: center;
/* margin-right: 200px; */
background: #121136;
color: rgb(24, 236, 151);
font-size: 1em;
margin: 2em;
padding: 0.4em .8em;
border: 1px solid rgb(24, 236, 151);
border-radius: 3px;
transition: 0.2s ease-in-out;
&:hover {
  background-color: rgb(24, 236, 151, 0.1);
  // color: white;
}
`;