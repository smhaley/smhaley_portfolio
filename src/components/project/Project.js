import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as GitIcon } from "../../icons/github.svg";
import { ReactComponent as ExtLink } from "../../icons/external-link.svg";
import { ReactComponent as DlLink } from "../../icons/logo-npm.svg";

const ProjContainer = styled.section`
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

const ProjCard = styled.div`
  display: grid;
  border-radius: 3px;
  box-shadow: 8px 4px 8px 4px rgba(0, 0, 0, 0.3);
  padding: 20px;
  max-width: 725px;
  @media screen and (min-width: ${(props) => props.theme.lg}) {
    max-width: 900px;
  }
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
`;

const Content = styled.div`
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

const ImgContainer = styled.div`
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

const ProjImg = styled.div`
  background-color: ${(props) => props.theme.green};
  border-radius: 7px;
  z-index: 0;
  max-width: 500px;
  margin-right: 0;
  margin-left: auto;
  display: block;
  img {
    border-radius: 7px;
    height: 100%;
    width: 100%;
    opacity: 0.5;
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


const ContentBlock = styled.div`
  background-color: ${(props) => props.theme.veryDark};
  border-radius: 5px;
  padding: 10px;
`;

const ProjStack = styled.ul`
  margin-left: -20px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const ListItem = styled.li`
  font-family: Consolas, monospace;
  padding-right: 50px;
  padding-left: 2ch;
  padding-top: 1ch;

  ::marker {
    content: "▸";
    padding: 5px;
    color: ${(props) => props.theme.blue};
  }
`;

const Project = ({ content, image }) => {
  const {
    heading,
    subHeading,
    mainContent,
    gitLink,
    appLink,
    stack,
    dlLink,
  } = content;

  const git = (
    <a href={gitLink} target="_blank">
      <GitIcon />
    </a>
  );
  const goTo = (
    <a href={appLink} target="_blank">
      <ExtLink />
    </a>
  );

  const dl = (
    <a href={dlLink} target="_blank">
      <DlLink />
    </a>
  );

  const projImg = <img src={image}></img>;

  return (
    <>
      <ProjCard>
        <ImgContainer>
          <ProjImg>{projImg}</ProjImg>
        </ImgContainer>
        <Content>
          <h1>{heading}</h1>
          <ContentBlock>
            <h5>{subHeading}</h5>
            <p>{mainContent}</p>
          </ContentBlock>
          {git}
          {goTo}
          {dlLink && dl}
          <ProjStack>
            {stack.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </ProjStack>
        </Content>
      </ProjCard>
    </>
  );
};

export default Project;