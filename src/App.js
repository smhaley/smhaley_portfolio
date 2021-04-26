import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/nav/Navbar";
import Hero from "./components/hero/Hero";
import Project from "./components/project/Project";
import Section from "./components/section/Section";
import styled from "styled-components";
import { useIntersectionObserver } from "./components/hooks";

const AppContainer = styled.section`
  flex-direction: column;
  margin: 50px auto;
  max-width: 1200px;
  padding: 20px;
  display: flex;
  /* 
  @media screen and (min-width: ${(props) => props.theme.xs}) {
    padding: 20px auto;
    transition: 0.3s ease-in-out;
  }

  @media screen and (min-width: ${(props) => props.theme.sm}) {
    padding: 20px auto;
    transition: 0.3s ease-in-out;
  }

  @media screen and (min-width: ${(props) => props.theme.md}) {
    padding: 20px 150px 20px 150px;
    transition: 0.3s ease-in-out;
  } */
`;

const SectionDiv = styled.div`
  /* margin: 50px; */
  height: 100vh;
  /* background-color: purple; */
`;

const SectionContainer = React.forwardRef((props, ref) => {
  const { activeHandler, index, children } = props;

  const node = ref;

  const entry = useIntersectionObserver(node, {
    threshold: 0,
    rootMargin: "-50% 0px -50% 0px",
    freezeOnceVisible: false,
  });

  useEffect(() => {
    if (entry) {
      const isVisible = entry.isIntersecting;
      if (isVisible) {
        activeHandler(index);
      }
    }
  }, [entry, index, activeHandler]);

  return (
    <SectionDiv>
      <div ref={node}>{children}</div>
    </SectionDiv>
  );
});

function App() {
  const [active, setActive] = useState();

  const heroRef = useRef();
  const aboutRef = useRef();
  const workRef = useRef();

  const activeHandler = (section) => setActive(section);

  return (
    <>
      <Navbar active={active} />

      <AppContainer>
        <SectionDiv>
          <Hero />
        </SectionDiv>
        <SectionContainer
          activeHandler={activeHandler}
          ref={heroRef}
          index={"About"}
        >
          <Section active={"About" === active} />
        </SectionContainer>

        <SectionContainer
          activeHandler={activeHandler}
          ref={workRef}
          index={"Work"}
        >
          <Project active={"Work" === active} />
        </SectionContainer>


        <div style={{ margin: "100px" }}></div>
        <div style={{ margin: "100px" }}>dfgsdgasfg</div>
        <div style={{ margin: "100px" }}>dfgsdgasfg</div>
        <div style={{ margin: "100px" }}>dfgsdgasfg</div>
        <div style={{ margin: "100px" }}>dfgsdgasfg</div>
        <div style={{ margin: "100px" }}>dfgsdgasfg</div>
        <div style={{ margin: "100px" }}>dfgsdgasfg</div>
        <div style={{ margin: "100px" }}>dfgsdgasfg</div>
        <div style={{ margin: "100px" }}>dfgsdgasfg</div>
        <div style={{ margin: "100px" }}>dfgsdgasfg</div>
      </AppContainer>
    </>
  );
}

export default App;
