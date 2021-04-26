import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { CSSTransition } from "react-transition-group";
import { Button } from "../../styles/common/Buttons";
import pep from "../../pics/pep.png";
import { ReactComponent as GitIcon } from "../../icons/github.svg";
import { ReactComponent as ExtLink } from "../../icons/external-link.svg";

const AboutContainer = styled.section`
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

const SectionCard = styled.div`
  display: grid;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;
  box-shadow: 8px 4px 8px 4px rgba(0, 0, 0, 0.3);
  padding: 20px;
  max-width: 900px;
  /* @media screen and (min-width: ${(props) => props.theme.lg}) {
    max-width: 900px;
  } */
`;

const AboutContent = styled.div`
  h1 {
    color: ${(props) => props.theme.blue};
  }

  h4 {
    color: ${(props) => props.theme.grey};
  }
  padding: 15px;
  /* max-width: 525px; */
  /* width: 50 */
  flex: 1;
`;

const Stack = styled.div`
  /* justify-content: space-between; */
  font-family: Consolas, monospace;
  font-weight: 300;
  max-width: 300px;
  max-width: 35%;
  position: relative;
  
`;

const ImageContainer = styled.div`
  img {
    width: 100%;
    border-radius: 7px;
    z-index:0;

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
const Section = ({ active }) => {
  const one = "";
  const two = <h1>Pretty Easy Privacy</h1>;
  const three = <h5>Simplifying PGP encryption</h5>;
  const four = (
    <p>
      Inspired by a client-side encryption module I wrote at work, Pretty Easy
      Privacy simplifies OpenPGP encryption. The goal is to privide a simplified
      interface for client-side encryption and to inspire interest in the topic.
    </p>
  );
  const five = (
    <a href="/">
      <GitIcon />
    </a>
  );
  const six = (
    <a href="/">
      <ExtLink />
    </a>
  );

  const stackOne = [
    "Javascript",
    "Typescript",
    "Python",
    "React",
    "Okta",
    "SQL",
    "Flask",
    "Django",
    "R",
    "Docker",
    "AWS",
    "SAS",
  ];
  const content = [one, two, three, four, five, six];
  const heading = <h5>Recent Technologies</h5>;

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
          <AboutContainer show={active}>
            <Heading>
              <h3>{`<Work/>`}</h3>
            </Heading>
            <SectionCard>
              <AboutContent>
                {two}
                <ContentBlock>
                  {" "}
                  {three}
                  {four}
                </ContentBlock>

                {five}
                {six}
              </AboutContent>
              <Stack>
                <ImageContainer>
                  <img src={pep}></img>
                </ImageContainer>
              </Stack>
            </SectionCard>
          </AboutContainer>
        </div>
      </CSSTransition>
    </>
  );
};

export default Section;
