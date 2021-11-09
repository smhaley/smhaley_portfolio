import styled, { css } from "styled-components";

export const ProjContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  svg {
    stroke: ${(props) => props.theme.light};
    padding: 5px;
    margin: 5px;
  }
  svg:hover {
    stroke: ${(props) => props.theme.green};
  }

  ${(props) =>
    !props.show &&
    css`
      visibility: hidden;
    `}
`;

export const Stack = styled.div`
  margin-top: 100px;
  margin-bottom: 200px;
`;

export const ProjCard = styled.div`
  display: grid;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  padding: 20px;
  max-width: 725px;
  @media screen and (min-width: ${(props) => props.theme.lg}) {
    max-width: 900px;
  }
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
`;

export const Content = styled.div`
  grid-row: 1/2;
  grid-column: 1/-1;

  @media screen and (min-width: ${(props) => props.theme.xs}) {
    grid-row: 1/2;
    grid-column: 1/-1;
  }

  @media screen and (min-width: ${(props) => props.theme.sm}) {
    grid-row: 1/2;
    grid-column: 1/4;
  }

  h1 {
    color: ${(props) => props.theme.blue};
  }

  h4 {
    color: ${(props) => props.theme.grey};
  }
  padding: 15px;
  flex: 1;
  z-index: 2;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-row: 2/3;
  grid-column: 1/-1;
  z-index: 0;

  @media screen and (min-width: ${(props) => props.theme.xs}) {
    grid-row: 1/2;
    grid-column: 1/-1;
  }

  @media screen and (min-width: ${(props) => props.theme.sm}) {
    grid-row: 1/2;
    grid-column: 3/-1;
  }

  @media screen and (min-width: ${(props) => props.theme.lg}) {
    grid-row: 1/2;
    grid-column: 4/-1;
  }
`;

export const ProjImg = styled.div`
  border-radius: 7px;
  z-index: 0;
  max-width: 500px;
  margin-right: 0;
  margin-left: auto;
  @media screen and (min-width: ${(props) => props.theme.xs}) {
    margin-top: -50px;
  }
  img {
    height: 100%;
    border-radius: 7px;
    width: 100%;
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
    @media screen and (min-width: ${(props) =>
        props.theme.xs}) and (max-width: ${(props) => props.theme.sm}) {
      opacity: 0.2;
    }
  }

  @media screen and (min-width: ${(props) =>
      props.theme.xs}) and (max-width: ${(props) => props.theme.sm}) {
    background-color: ${(props) => props.theme.veryDark};
  }
  img:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const ContentBlock = styled.div`
  background-color: ${(props) => props.theme.veryDark};
  border-radius: 5px;
  padding: 10px;
  max-width: 500px;
`;

export const ProjStack = styled.ul`
  margin-left: -50px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
`;

export const ListItem = styled.li`
  font-family: Consolas, monospace;
  padding-left: 1.5ch;
  padding-top: 1.5ch;
  list-style-type: none;

  ::before {
    content: "⟡";
    color: ${(props) => props.theme.blue};
    border-radius: 1ch;
    padding-inline: 1ch;
    margin-inline-end: 1ch;
  }
`;
