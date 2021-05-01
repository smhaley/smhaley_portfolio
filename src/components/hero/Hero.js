import React, { useState, useRef, useEffect, createRef } from "react";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Button } from "../../styles/common/Buttons";

const HeroContainer = styled.section`
  margin: 50px;
  display: flex;
  flex-direction: column;
  padding-top: 10%;
  transition: 0.1s ease-in-out;
  @media screen and (min-width: ${(props) => props.theme.md}) {
    padding-left: 10%;
    transition: 0.1s ease-in-out;
  }

  h4 {
    font-weight: 400;
    margin-top: 0;
    /* color: ${(props) => props.theme.teal}; */
  }

  h1 {
    font-size: clamp(1.5rem, 8vw, 5rem);
    margin: 0 5px 0;
    white-space: nowrap;
    font-weight: 600;
    color: ${(props) => props.theme.blue};
  }

  h3 {
    font-weight: 500;
    margin-top: 0;
    font-size: clamp(1rem, 5vw, 3rem);
    color: ${(props) => props.theme.teal};
  }
  p {
    /* max-width: 300px; */
    transition: 0.3s ease-in-out;
    @media screen and (min-width: ${(props) => props.theme.xs}) {
      align-items: center;
      transition: 0.3s ease-in-out;
      /* max-width: 500px; */
      transition: 0.3s linear;
    }
  }
`;

const Hero = ({ handleContactScroll }) => {
  const one = <h4>Hey, I'm</h4>;
  const two = <h1>Shawn Haley.</h1>;
  const three = <h3>Full stack data engineer.</h3>;
  const five = <Button onClick={handleContactScroll}>Get In Touch</Button>;

  const content = [one, two, three, five];

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  const nodes = [useRef(null), useRef(null), useRef(null), useRef(null)];

  return (
    <>
      <HeroContainer>
        <TransitionGroup component={null}>
          {content.map((item, index) => (
            <CSSTransition
              key={index}
              nodeRef={nodes[index]}
              appear={true}
              timeout={4000}
              classNames={"fadeIn"}
            >
              <div
                key={index}
                ref={nodes[index]}
                style={{ transitionDelay: `${index * 7 + 1}00ms` }}
              >
                {item}
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </HeroContainer>
    </>
  );
};

export default Hero;
