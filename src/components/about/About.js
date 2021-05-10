import React, { useRef, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as GitIcon } from "../../icons/github.svg";
import { ReactComponent as LinkedIn } from "../../icons/linkedin.svg";
import { Heading } from "../../styles/common/generic";
import { aboutContent } from "./aboutContent";
import {
  AboutContainer,
  SectionCard,
  AboutContent,
  AboutStack,
  Stack,
  ListItem,
  Link,
} from "./About.styled";

const About = ({ active }) => {
  const [show, setShow] = useState(false);

  const one = "";
  const two = <h1>{aboutContent.heading}</h1>;
  const three = <p>{aboutContent.overview}</p>;
  const four = <p>{aboutContent.current}</p>;
  const five = (
    <div>
      <a href={aboutContent.linkedIn} target="_blank" rel="noreferrer">
        <LinkedIn />
      </a>
      <a href={aboutContent.github} target="_blank" rel="noreferrer">
        <GitIcon />
      </a>
    </div>
  );
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
  const content = [one, two, three, four, five, six];
  const heading = <h5>Recent Technologies</h5>;

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
          <AboutContainer show={show}>
            <Heading>
              <h3>{`<About/>`}</h3>
            </Heading>
            <SectionCard>
              <AboutContent>
                {" "}
                {content.map((val, index) => (
                  <div key={index}>{val}</div>
                ))}{" "}
              </AboutContent>
              <Stack>
                {heading}
                <AboutStack>
                  {stackOne.map((item, key) => (
                    <ListItem key={item}>{item}</ListItem>
                  ))}
                </AboutStack>
              </Stack>
            </SectionCard>
          </AboutContainer>
        </div>
      </CSSTransition>
    </>
  );
};

export default About;
