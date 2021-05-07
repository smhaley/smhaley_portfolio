import React, { useRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { CSSTransition } from "react-transition-group";
import pep from "../../pics/pep.png";
import tab from "../../pics/tab.png";
import Project from "./Project";
import { pepContent, tabContent } from "./content";
import { Heading } from "../../styles/common/generic";

const ProjContainer = styled.section`
  margin-top: 100px;
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
