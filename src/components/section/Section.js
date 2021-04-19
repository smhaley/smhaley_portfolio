import React, { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Button } from "../../styles/common/Buttons";

const AboutContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;

const SectionCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: orange;
  align-items: center;
  box-shadow: 8px 4px 8px 4px rgba(0, 0, 0, 0.3);
  padding: 20px;
  max-width: 550px;
  @media screen and (min-width: ${(props) => props.theme.lg}) {
    max-width: 900px;
  }
`;

const AboutContent = styled.div`
  padding: 15px;
  max-width: 525px;
`;

const AboutStack = styled.ul`
  margin-left: -28px;
  -moz-column-count: 2;
  -moz-column-gap: 20px;
  -webkit-column-count: 2;
  -webkit-column-gap: 20px;
  column-count: 2;
  column-gap: 20px;

  @media screen and (min-width: ${(props) => props.theme.sm}) {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }
  @media screen and (min-width: ${(props) => props.theme.md}) {
    -moz-column-count: 4;
    -webkit-column-count: 4;
    column-count: 4;
  }
  @media screen and (min-width: ${(props) => props.theme.lg}) {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }
`;

const Stack = styled.div`
  padding-left: 20px;
  /* margin: -20px; */
  h5 {
    font-family: Consolas, monospace;
    font-weight: 300;
  }
  @media screen and (min-width: ${(props) => props.theme.lg}) {
    margin: -20px;
  }
`;

const ListItem = styled.li`
  font-family: Consolas, monospace;

  padding-left: 2ch;
  padding-top: 1ch;

  ::marker {
    content: "▸";
    color: yellow;
  }
`;

const Heading = styled.div`
   
  h3{
  font-family: Consolas, monospace;
  font-size: 2rem;
  margin-bottom: 20px;
} 
  h3::before,
  h3::after {
    display: inline-block;
    content: "";
    border-top: 0.05rem solid yellow;
    width: 4rem;
    margin: 0 1.5rem;
    transform: translateY(-.55rem);
  }
`;

const Link = styled(Button)`
  margin-top: 20px;
`;

const Section = () => {
  const one = "";
  const two = <h1>Educator turned statistician turn developer</h1>;
  const three = (
    <p>
      Back end, front end, data engineering, machine learning. I'm a passionate
      developer in love with problem solving. My present interest is web and app
      development, but I'm always open to new problems.
    </p>
  );
  const four = (
    <p>
      Currently I am a React developer and data engineer focusing on developing
      apps for consuming and training Natural Language models.
    </p>
  );
  const five = <a>Let's connect</a>;
  const six = <Link>Resume</Link>;

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
  const content = [one, two, three, four, five];
  const heading = <h5>Recent Technologies</h5>;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <AboutContainer>
        <Heading><h3>{`<About/>`}</h3></Heading>
        <SectionCard>
          <AboutContent> {content}</AboutContent>
          <Stack>
            {heading}
            <AboutStack>
              {stackOne.map((item, key) => (
                <ListItem key={key}>{item}</ListItem>
              ))}
            </AboutStack>
          </Stack>
        </SectionCard>
      </AboutContainer>
    </>
  );
};

export default Section;
