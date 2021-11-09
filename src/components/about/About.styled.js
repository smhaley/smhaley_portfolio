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
  @media screen and (min-width: ${(props) => props.theme.xxxs}) {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }

  @media screen and (min-width: ${(props) => props.theme.sm}) {
    margin-left: -10px;
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
  @media screen and (min-width: ${(props) => props.theme.xs}) {
    h5 {
      padding-left: 45px;
    }
  }
`;

export const ListItem = styled.li`
  font-family: Consolas, monospace;
  padding-top: 1ch;
  list-style-type: none;
  left: 0;

  ::before {
    content: "⟡";
    color: ${(props) => props.theme.green};
    border-radius: 1ch;
    padding-inline: 1ch;
    margin-inline-end: 1ch;
  }

  @media screen and (min-width: ${(props) => props.theme.xxxs}) {
    padding-left: 1.5ch;
    ::before {
      content: none;
    }
  }
  @media screen and (min-width: ${(props) => props.theme.xxs}) {
    padding-left: 3ch;
  }

  @media screen and (min-width: ${(props) => props.theme.xs}) {
    padding-left: 2ch;

    ::before {
      content: "⟡";
      color: ${(props) => props.theme.green};
      border-radius: 1ch;
      padding-inline: 1ch;
      margin-inline-end: 1ch;
    }
  }
`;

export const Link = styled(Button)`
  margin-top: 20px;
`;
