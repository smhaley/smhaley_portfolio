import React, { useRef } from "react";
import { HeroContainer } from "./Hero.styled";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Button } from "../../styles/common/Buttons";

const Hero = ({ handleContactScroll }) => {
  const one = <h4>Hey, I'm</h4>;
  const two = <h1>Shawn Haley.</h1>;
  const three = <h3>Full stack data engineer.</h3>;
  const five = <Button onClick={handleContactScroll}>Get In Touch</Button>;

  const content = [one, two, three, five];

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
                style={{ transitionDelay: `${index * 3 + 1}00ms` }}
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
