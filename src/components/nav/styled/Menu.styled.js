import styled from "styled-components";
import { respondTo } from "../../../styles/mixins";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.green};
  height: 100vh;
  text-align: right;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
 
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
    color: green;
    text-decoration: none;
    transition: color 0.3s linear;



    &:hover {
      color: blue;
    }
  }
`;
