import React, { useState, useRef } from "react";
import Navbar from "./components/nav/Navbar";
import Hero from "./components/hero/Hero";
import ProjectContainer from "./components/project/ProjectContainer";
import Section from "./components/about/About";
import SectionContainer from "./components/SectionContainer";
import Contact from "./components/contact/Contact";
import styled from "styled-components";
import Footer from "./components/footer/Footer";
import smoothscroll from "smoothscroll-polyfill";

const AppBody = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: auto;
`;

const AppContainer = styled.main`
  flex-direction: column;
  margin: 50px auto;
  max-width: 1200px;
  padding: 20px;
  display: flex;
  transition: filter 0.3s ease-in-out;
  ${({ menuState }) =>
    menuState
      ? `  
  filter: blur(3px);
  pointer-events: none;
  `
      : `
  filter: blur(0);
  pointer-events: default;  
  `};
`;

const App = () => {
  smoothscroll.polyfill();

  const [active, setActive] = useState();
  const [menuState, setMenuState] = useState(false);

  const refs = {
    Hero: useRef(),
    About: useRef(),
    Projects: useRef(),
    Contact: useRef(),
  };

  const activeHandler = (section) => setActive(section);

  const handleScroll = (target) => {
    refs[target].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const content = [
    {
      id: "Hero",
      ref: refs.Hero,
      section: <Hero handleContactScroll={() => handleScroll("Contact")} />,
    },

    {
      id: "About",
      ref: refs.About,
      section: <Section active={"About" === active} />,
    },
    {
      id: "Projects",
      ref: refs.Projects,
      section: <ProjectContainer active={"Projects" === active} />,
    },
    {
      id: "Contact",
      ref: refs.Contact,
      section: <Contact active={"Contact" === active} />,
    },
  ];

  return (
    <AppBody>
      <Navbar
        active={active}
        handleScroll={handleScroll}
        setMenuState={setMenuState}
      />

      <AppContainer menuState={menuState}>
        {content.map((value) => (
          <SectionContainer
            activeHandler={activeHandler}
            ref={value.ref}
            index={value.id}
            key={value.id}
          >
            {value.section}
          </SectionContainer>
        ))}
      </AppContainer>
      <Footer />
    </AppBody>
  );
};

export default App;
