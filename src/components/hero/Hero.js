import React, { useRef, useState, useEffect } from "react";
import { HeroContainer, ImageContainer, TextContainer } from "./Hero.styled";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Button } from "../../styles/common/Buttons";
import avatar_sm from "../../pics/avatar_sm.png";

const Hero = ({ handleContactScroll }) => {
  const [mount, setMount] = useState(false);
  const one = <h4>Hey, I'm</h4>;
  const two = <h1>Shawn Haley.</h1>;
  const three = <h3>Full stack data engineer.</h3>;
  const five = <Button onClick={handleContactScroll}>Get In Touch</Button>;

  const content = [one, two, three, five];

  const nodes = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const imgNode = useRef(null);
  
  useEffect(() => {
    setTimeout(() => setMount(true), 300);
    return () => clearTimeout(setMount(true));
  });

  return (
    <>
      <HeroContainer>
        <CSSTransition
          in={true}
          nodeRef={imgNode}
          appear={true}
          timeout={500}
          classNames={"fadeLogo"}
        >
          <ImageContainer>
            <div ref={imgNode} style={{ transitionDelay: "650ms" }}>
              <img src={avatar_sm} alt="avatar"></img>
            </div>
          </ImageContainer>
        </CSSTransition>
        <TextContainer>
          <TransitionGroup component={null}>
            {mount &&
              content.map((item, index) => (
                <CSSTransition
                  key={index}
                  nodeRef={nodes[index]}
                  timeout={5000}
                  classNames={"fadeIn"}
                >
                  <div
                    key={index}
                    ref={nodes[index]}
                    style={{ transitionDelay: `${index * 1 + 1}00ms` }}
                  >
                    {item}
                  </div>
                </CSSTransition>
              ))}
          </TransitionGroup>
        </TextContainer>
      </HeroContainer>
    </>
  );
};

export default Hero;
