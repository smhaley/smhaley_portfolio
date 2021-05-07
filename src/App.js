import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/nav/Navbar";
import Hero from "./components/hero/Hero";
import ProjectContainer from "./components/project/ProjectContainer";
import Section from "./components/about/About";
import SectionContainer from "./components/SectionContainer";
import Contact from "./components/contact/Contact";
import styled from "styled-components";
import Footer from "./components/footer/Footer";

const AppBody = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: auto;
`;

const AppContainer = styled.section`
  flex-direction: column;
  margin: 50px auto;
  max-width: 1200px;
  padding: 20px;
  display: flex;
`;

const SectionDiv = styled.div`
  /* margin: 50px; */
  /* flex:1; */
  min-height: 100vh;
  /* background-color: purple; */
`;

// const SectionContainer = React.forwardRef((props, ref) => {
//   const { activeHandler, index, children } = props;

//   const node = ref;

//   const entry = useIntersectionObserver(node, {
//     threshold: 0,
//     rootMargin: "-50% 0px -50% 0px",
//     freezeOnceVisible: false,
//   });

//   useEffect(() => {
//     if (entry) {
//       const isVisible = entry.isIntersecting;
//       if (isVisible) {
//         activeHandler(index);
//       }
//     }
//   }, [entry, index, activeHandler]);

//   return (
//     <SectionDiv>
//       <div ref={node}>{children}</div>
//     </SectionDiv>
//   );
// });

function App() {
  const [active, setActive] = useState();

  const refs = {
    Hero: useRef(),
    About: useRef(),
    Work: useRef(),
    Contact: useRef(),
  };

  const activeHandler = (section) => setActive(section);

  const handleScroll = (target) => {
    refs[target].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <AppBody>
        <Navbar active={active} handleScroll={handleScroll} />
        <AppContainer>
          <SectionContainer
            activeHandler={activeHandler}
            ref={refs["Hero"]}
            index={"Hero"}
          >
            <Hero handleContactScroll={() => handleScroll("Contact")} />
          </SectionContainer>

          <SectionContainer
            activeHandler={activeHandler}
            ref={refs["About"]}
            index={"About"}
          >
            <Section active={"About" === active} />
          </SectionContainer>

          <SectionContainer
            activeHandler={activeHandler}
            ref={refs["Work"]}
            index={"Work"}
          >
            <ProjectContainer active={"Work" === active} />
          </SectionContainer>

          <SectionContainer
            activeHandler={activeHandler}
            ref={refs["Contact"]}
            index={"Contact"}
          >
            <Contact active={"Contact" === active} />
          </SectionContainer>
        </AppContainer>
        <Footer />
      </AppBody>
    </>
  );
}

export default App;
