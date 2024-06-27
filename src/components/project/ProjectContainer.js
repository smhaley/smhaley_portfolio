import React, { useRef, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import tab from "../../pics/tab.png";
import Project from "./Project";
import {  tabContent } from "./Project.content";
import { Heading } from "../../styles/common/generic";
import { ProjContainer } from "./Project.styled";

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
              <h3>{`<RecentProjects/>`}</h3>
            </Heading>

            <Project content={tabContent} image={tab} />
          </ProjContainer>
        </div>
      </CSSTransition>
    </>
  );
};

export default ProjectContainer;
