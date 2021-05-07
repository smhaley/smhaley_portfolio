import styled from "styled-components";


export const Heading = styled.div`
color: ${(props) => props.theme.green};
h3 {
  font-weight: 300;
  font-family: Consolas, monospace;
  font-size: 1rem;
  margin-bottom: 20px;
  @media screen and (min-width: ${(props) => props.theme.xs}) {
    font-size: 1.3rem;
    &::before,
    &::after {
      display: inline-block;
      content: "";
      border-top: 0.05rem solid ${(props) => props.theme.blue};
      width: 2rem;
      margin: 0 1.5rem;
      transform: translateY(-0.4rem);
    }
  }
  @media screen and (min-width: ${(props) => props.theme.sm}) {
    font-size: 1.7rem;
    &::before,
    &::after {
      width: 4rem;
      margin: 0 1.5rem;
      transform: translateY(-0.5rem);
    }
  }
}

@media screen and (min-width: ${(props) => props.theme.md}) {
  margin-top: -52px;
}
`;

