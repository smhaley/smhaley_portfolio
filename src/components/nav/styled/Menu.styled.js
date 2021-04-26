import styled from "styled-components";
import { respondTo } from "../../../styles/mixins";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.teal};
  height: 100vh;
  text-align: right;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  padding:15px;
  
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  ${({open})=> open &&
      `box-shadow: 0 0 0 9999px rgba(0,0,0,0.5);
       transition: all 0.3s ease-in-out;
      `
  }
  ${respondTo.sm`
      transition: transform 0.3s ease-in-out;
      transform: translateX(100%);

    `}
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${props=>props.theme.darkNavy};
    text-decoration: none;
    transition: color 0.3s linear;



    &:hover {
      color: ${props=>props.theme.navy};
    }
  }
`;
