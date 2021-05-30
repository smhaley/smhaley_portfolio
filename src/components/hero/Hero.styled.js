import styled from "styled-components";

export const TextContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: 0.1s ease-in-out;
  margin-left:5%;

  @media screen and (min-width: ${(props) => props.theme.xs}) {
    padding-top: 125px;
    transition: 0.1s ease-in-out;
  }

  h4 {
    font-weight: 400;
    margin-top: 0;
  }

  h1 {
    font-size: clamp(3rem, 10vw, 6rem);
    margin: 0;
    white-space: nowrap;
    font-weight: 600;
    color: ${(props) => props.theme.blue};
  }

  h3 {
    font-weight: 500;
    margin-top: 15px;
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

export const ImageContainer = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 7px;
    width: 100%;
    max-width: 200px;
    min-width: 100px;
    opacity: 0.7;
    padding-top: 60px;
    transition: opacity 0.3s ease-in-out;

    @media screen and (min-width: ${(props) => props.theme.xs}) {
      max-width: 350px;
      padding-left: 15px;
      padding-top: 100px;
    }
    @media screen and (min-width: ${(props) => props.theme.sm}) {
      padding-left: 10px;
    }
  }
  img:hover {
    opacity: 1;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${(props) => props.theme.xs}) {
    flex-direction: row-reverse;
  }
`;
