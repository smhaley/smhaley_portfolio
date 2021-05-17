import styled, { css } from "styled-components";
import { Button } from "../../styles/common/Buttons";

export const AboutContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  ${(props) =>
    !props.show &&
    css`
      visibility: hidden;
    `}
  svg {
    stroke: ${(props) => props.theme.light};
    padding: 5px;
    margin: 5px;
  }
  svg:hover {
    stroke: ${(props) => props.theme.green};
  }
`;

export const SectionCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  padding: 20px;
  max-width: 500px;
  @media screen and (min-width: ${(props) => props.theme.lg}) {
    max-width: 950px;
  }
`;

export const AboutContent = styled.div`
  h1 {
    color: ${(props) => props.theme.blue};
  }
  padding: 15px;
  max-width: 500px;
`;

export const AboutStack = styled.ul`
  margin-left: -28px;
  -moz-column-count: 2;
  -moz-column-gap: 20px;
  -webkit-column-count: 2;
  -webkit-column-gap: 20px;
  column-count: 2;
  column-gap: 20px;

  @media screen and (min-width: ${(props) => props.theme.sm}) {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }
  @media screen and (min-width: ${(props) => props.theme.lg}) {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }
`;

export const Stack = styled.div`
  font-family: Consolas, monospace;
  font-weight: 300;
  margin-right: auto;

  @media screen and (min-width: ${(props) => props.theme.lg}) {
    margin-top: -84px;
  }
  h5 {
    padding-left: 25px;
  }
`;

export const ListItem = styled.li`
  font-family: Consolas, monospace;
  padding-left: 2ch;
  padding-top: 1ch;
  list-style-type: none;

  ::before {
    content: "⟡";
    color: ${(props) => props.theme.green};
    border-radius: 1ch;
    padding-inline: 1ch;
    margin-inline-end: 1ch;
  }
`;

export const Link = styled(Button)`
  margin-top: 20px;
`;
