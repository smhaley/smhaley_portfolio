import styled from "styled-components";

export const HeroContainer = styled.section`
margin: 50px;
display: flex;
flex-direction: column;
padding-top: 10%;
transition: 0.1s ease-in-out;
@media screen and (min-width: ${(props) => props.theme.md}) {
  padding-left: 10%;
  transition: 0.1s ease-in-out;
}

h4 {
  font-weight: 400;
  margin-top: 0;
}

h1 {
  font-size: clamp(2.6rem, 10vw, 5rem);
  margin: 0 5px 0;
  white-space: nowrap;
  font-weight: 600;
  color: ${(props) => props.theme.blue};
}

h3 {
  font-weight: 500;
  margin-top: 0;
  font-size: clamp(1rem, 5vw, 3rem);
  color: ${(props) => props.theme.teal};
}
p {
  transition: 0.3s ease-in-out;
  @media screen and (min-width: ${(props) => props.theme.xs}) {
    align-items: center;
    transition: 0.3s ease-in-out;
    transition: 0.3s linear;
  }
}
`;