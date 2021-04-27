import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { CSSTransition } from "react-transition-group";
import pep from "../../pics/pep.png";
import tab from "../../pics/tab.png";
import { ReactComponent as GitIcon } from "../../icons/github.svg";
import { ReactComponent as ExtLink } from "../../icons/external-link.svg";
import { ReactComponent as NPMLink } from "../../icons/logo-npm.svg";
import Project from "./Project";
import { pepContent, tabContent } from "./content";

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

const Heading = styled.div`
  color: ${(props) => props.theme.green};
  h3 {
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

const ContentBlock = styled.div`
  background-color: ${(props) => props.theme.veryDark};
  border-radius: 5px;
  padding: 10px;
`;

const Stack = styled.div`
  margin-top:100px;
`;

const ProjectContainer = ({ active }) => {
  const heading = <h1>Pretty Easy Privacy</h1>;
  const subHeading = <h5>Simplifying PGP encryption</h5>;
  const mainContent = (
    <p>
      Inspired by a client-side encryption module I wrote at work, Pretty Easy
      Privacy simplifies OpenPGP encryption. The goal is to privide a simplified
      interface for client-side encryption and to inspire interest in the topic.
    </p>
  );
  const git = (
    <a href="/">
      <GitIcon />
    </a>
  );
  const goTo = (
    <a href="/">
      <ExtLink />
    </a>
  );

  const projImg = <img src={pep}></img>;

  const nodeRef = useRef(null);

  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        in={active}
        timeout={200}
        classNames="fade"
      >
        <div ref={nodeRef}>
          <ProjContainer show={active}>
            <Heading>
              <h3>{`<Work/>`}</h3>
            </Heading>
           
            <Project content={pepContent} image={pep} />
            <Stack>
            <Project content={tabContent} image={tab} />
            </Stack>
          </ProjContainer>
        </div>
      </CSSTransition>
    </>
  );
};

export default ProjectContainer;
