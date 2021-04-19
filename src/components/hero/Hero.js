import React, { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Button } from "../../styles/common/Buttons";

const HeroContainer = styled.section`
  margin:50px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */

  h4 {
    font-weight: 400;
    margin-top:0;
    color: ${props=> props.theme.teal};
  }

  h1 {
    font-size: clamp(1.5rem, 8vw, 5rem);
    margin: 0 5px 0;
    white-space: nowrap;
    font-weight: 600;
    color: ${props=> props.theme.blue};
  }

  h3 {
    font-weight: 500;
    margin-top:0;
    font-size: clamp(1rem, 5vw, 3rem);
    color: ${props=> props.theme.light};
  }
  p {
    /* max-width: 300px; */
    transition: 0.3s ease-in-out;
    @media screen and (min-width: ${(props) => props.theme.xs}) {
      align-items: center;
      transition: 0.3s ease-in-out;
      /* max-width: 500px; */
      transition: .3s linear;
    }
  }
`;

const Link = styled(Button)`
  text-decoration: none;
  max-width: 100px;
  margin-top:0;
`;

const Hero = () => {
  const one = <h4>Hey, I'm</h4>;
  const two = <h1>Shawn Haley.</h1>;
  const three = <h3>Full stack data engineer.</h3>;
  const five = (
    <Link as="a" href={`mailto:${"shawnh87@gmail.com"}`}>
      Get In Touch
    </Link>
  );

  const content = [one, two, three, five];

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <HeroContainer>
        <TransitionGroup component={null}>
          {content.map((item, index) => (
            <CSSTransition
              key={index}
              appear={true}
              timeout={4000}
              classNames={"fadeIn"}
            >
              <div style={{ transitionDelay: `${index * 7 + 1}00ms` }}>
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
