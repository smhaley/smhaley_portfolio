import React, { useRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { CSSTransition } from "react-transition-group";
import { Button } from "../../styles/common/Buttons";

const AboutContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  ${(props) =>
    !props.show &&
    css`
      visibility: hidden;
    `}
`;

const SectionCard = styled.div`
  /* flex-grow: 100; */
  width: 90%;
  /* align-items: center; */
  border-radius: 3px;
  box-shadow: 8px 4px 8px 4px rgba(0, 0, 0, 0.3);
  padding: 20px;
  @media screen and (min-width: ${(props) => props.theme.sm}) {
    width: 70%;
  }
  @media screen and (min-width: ${(props) => props.theme.md}) {
    width: 60%;
  }
  @media screen and (min-width: ${(props) => props.theme.lg}) {
    max-width: 50%;
  }
`;

const Heading = styled.div`
  color: ${(props) => props.theme.green};
  h3 {
    font-family: Consolas, monospace;
    font-size: 1rem;
    margin-bottom: 20px;
    @media screen and (min-width: ${(props) => props.theme.sm}) {
      font-size: 1.8rem;
    }
  }

  h3::before,
  h3::after {
    display: inline-block;
    content: "";
    border-top: 0.05rem solid ${(props) => props.theme.blue};
    width: 3rem;
    margin: 0 1.5rem;
    transform: translateY(-0.27rem);

    @media screen and (min-width: ${(props) => props.theme.sm}) {
      display: inline-block;
      content: "";
      border-top: 0.05rem solid ${(props) => props.theme.blue};
      width: 4rem;
      margin: 0 1.5rem;
      transform: translateY(-0.55rem);
    }
  }

  @media screen and (min-width: ${(props) => props.theme.md}) {
    margin-top: -52px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 550px;
  margin: 20px auto;

  button {
      width: 125px;
      
  }
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: ${(props) => props.theme.blue};
  display: block;
`;

export const Input = styled.input.attrs({
  type: "text",
})`
  padding: 1rem;
  font-size: 1rem;
  color: ${(props) => props.theme.veryDark};
  background: ${(props) => props.theme.grey};
  border: none;
  border-radius: 3px;
  width: 70%;
  display: block;
  margin-bottom: 0.5em;

  &:focus {
    outline: none !important;
    border: 1px solid ${(props) => props.theme.green};
    box-shadow: 0 0 4px #719ece;
  }
`;

export const Email = styled.input.attrs({
  type: "email",
})`
  font-size: 1rem;
  padding: 1em;
  color: ${(props) => props.theme.veryDark};
  background: ${(props) => props.theme.grey};
  border: none;
  border-radius: 3px;
  width: 70%;
  display: block;
  margin-bottom: 0.5em;

  &:focus {
    outline: none !important;
    border: 1px solid ${(props) => props.theme.green};
    box-shadow: 0 0 4px #719ece;
  }
`;

export const MessageBody = styled.textarea.attrs({
  rows: 6,
  resize: 'vertical'
})`
  padding: 1em;
  resize: vertical; 
  font-size: 1rem;
  color: ${(props) => props.theme.veryDark};
  background: ${(props) => props.theme.grey};
  border: none;
  border-radius: 3px;
  width: 90%;
  display: block;
  margin-bottom: 0.5em;

  &:focus {
    outline: none !important;
    border: 1px solid ${(props) => props.theme.green};
    box-shadow: 0 0 4px #719ece;
  }
`;

export const Message = styled.label`
  margin-bottom: 0.5em;
  padding-left: 10px;
  font-size: 0.85rem;
  color: palevioletred;
  /* display: block; */
`;

const InputDiv = styled.div`
  margin-bottom: 1.5em;
`;

const Section = ({ active }) => {
  const [show, setShow] = useState(false);

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
      Currently I am a React developer and data engineer with Travelers
      Insurance. My focus is developing apps for consuming and training Natural
      Language models.
    </p>
  );
  const five = <a href="/">Let's connect</a>;

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
  //   const content = [one, two, three, four, five, six];
  const heading = <h5>Recent Technologies</h5>;

  const nodeRef = useRef(null);

  useEffect(() => {
    active && !show && setShow(true);
  }, [active]);

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
              <h3>{`<Contact/>`}</h3>
            </Heading>
            <SectionCard>
              <FormGroup>
                <InputDiv>
                  <Label htmlFor="label">Name</Label>
                  <Input id="label" />
                  <Message>Name required!</Message>
                </InputDiv>
                <InputDiv>
                  <Label>Email</Label>
                  <Email />
                  <Message>Email required!</Message>
                </InputDiv>
                <InputDiv>
                  <Label>Message</Label>
                  <MessageBody />
                  <Message>Messaged required!</Message>
                </InputDiv>
                <Button>Let's Connect</Button>
              </FormGroup>
            </SectionCard>
          </AboutContainer>
        </div>
      </CSSTransition>
    </>
  );
};

export default Section;
