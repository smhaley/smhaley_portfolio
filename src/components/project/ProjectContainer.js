import React, { useRef, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import pep from "../../pics/pep.png";
import tab from "../../pics/tab.png";
import Project from "./Project";
import { pepContent, tabContent } from "./content";
import { Heading } from "../../styles/common/generic";
import { ProjContainer, Stack } from "./Project.styled";

const ProjectContainer = ({ active }) => {
  const [show, setShow] = useState(false);

  const nodeRef = useRef(null);

  useEffect(() => {
    active && !show && setShow(true);
  }, [active, show]);

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
