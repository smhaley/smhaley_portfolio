import styled from "styled-components";


export const Button = styled.button`
  /* display: flex;
  align-items: center;
   */
  text-align: center;
  background: transparent;
  color: rgb(24, 236, 151);
  font-size: 1.1em;
  padding: 0.8em 1em;
  border: 1px solid rgb(24, 236, 151);
  border-radius: 3px;
  transition: 0.1s ease-in-out;
  &:active {
    background-color: ${props=>props.theme.hoverGreen};
  }
`;



