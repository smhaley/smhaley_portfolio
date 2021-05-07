import styled from "styled-components";

export const Button = styled.button`
  text-align: center;
  background: transparent;
  color: rgb(24, 236, 151);
  font-size: 1.1em;
  padding: 0.5em 0.7em;
  border: 1px solid rgb(24, 236, 151);
  border-radius: 3px;
  transition: 0.1s ease-in-out;
  &:active {
    background-color: ${(props) => props.theme.hoverGreen};
  }
`;
