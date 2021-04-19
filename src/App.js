import React, { useState, useRef } from "react";
import Navbar from "./components/nav/Navbar";
import Hero from "./components/hero/Hero";
import Section from "./components/section/Section";
import styled from "styled-components";

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
  background-color: purple;
`;

function App() {
  return (
    <>
      <Navbar />

      <AppContainer>
        <SectionDiv>
          <Hero />
        </SectionDiv>
        <SectionDiv>
          <Section />
        </SectionDiv>

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
