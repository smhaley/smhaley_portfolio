import React, { useRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { CSSTransition } from "react-transition-group";
import pep from "../../pics/pep.png";
import tab from "../../pics/tab.png";
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


const Stack = styled.div`
  margin-top: 100px;
  margin-bottom: 200px;
`;

const ProjectContainer = ({ active }) => {
  const [show, setShow] = useState(false);

  const nodeRef = useRef(null);

  useEffect(() => {
    active && !show && setShow(true);
  }, [active]);

  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        in={show}
        timeout={200}
        classNames="fade"
      >
        <div ref={nodeRef}>
          <ProjContainer show={show}>
            <Heading>
              <h3>{`<RecentWork/>`}</h3>
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
