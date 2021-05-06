import React, { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled, { css, keyframes, property } from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Button } from "../../styles/common/Buttons";
import { ReactComponent as Success } from "../../icons/success.svg";

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
  width: 90%;
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
  justify-content: center;
  flex-direction: column;
  max-width: 550px;
  margin: 20px auto;

  button {
    max-width: 100px;
  }

  input,
  textarea {
    padding: 0.8rem;
    font-size: 1rem;
    color: ${(props) => props.theme.veryDark};
    background-color: ${(props) => props.theme.light};
    border: none;
    border-radius: 3px;
    width: 70%;
    display: block;
    margin-bottom: 0.5em;

    &:focus {
      transition: 0.2s ease-in-out;
      outline: none !important;
      border: 1px solid ${(props) => props.theme.green};
      box-shadow: 0 0 4px #719ece;
    }
    &:active {
      transition: 0.2s ease-in-out;
      outline: none !important;
      border: 1px solid ${(props) => props.theme.green};
      box-shadow: 0 0 4px #719ece;
    }
  }

  textarea {
    width: 90%;
    resize: vertical;
  }

  p {
    color: ${(props) => props.theme.grey};
    padding-bottom: 15px;
  }
`;

const Label = styled.label`
  margin-bottom: 0.5em;
  color: ${(props) => props.theme.blue};
  display: block;
`;

const Message = styled.label`
  margin-bottom: 0.5em;
  padding-left: 10px;
  font-size: 0.85rem;
  color: palevioletred;
`;

const InputDiv = styled.div`
  margin-bottom: 1.5em;
`;

const ThankYou = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 25px;
  text-align: center;

  h1 {
    font-size: clamp(1.5rem, 7vw, 2rem);
    font-weight: 400;
    color: ${(props) => props.theme.blue};
  }

  h3 {
    font-weight: 400;
    margin-top: 0;
    font-size: clamp(1rem, 7vw, 2rem);
    color: ${(props) => props.theme.teal};
  }
`;

const rotate = keyframes`{
    @property --angle {
        syntax: '<angle>';
        initial-value: 0deg;
        inherits: false;
    }
	to {
		--angle: 360deg;
	}
    }`;

const ThanksDiv = styled.div`
margin-top: 20px;
  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

  --angle: 0deg;
  max-width: 50vmin;
  max-height: 50vmin;
  border: 2vmin solid;
  border-image: conic-gradient(
      from var(--angle),
      ${(props) => props.theme.teal},
      purple,
      ${(props) => props.theme.green},
      purple,
      ${(props) => props.theme.teal}
    )
    1;

  animation: 2s ${rotate} linear infinite;
`;

const Section = ({ active }) => {
  //{from_name}, {to_name}, message,
  const serviceId = "service_znvjccb";
  const templateId = "template_55u84ye";

  const [show, setShow] = useState(false);
  const [view, setView] = useState("form");

  const onSubmit = (data) => {
    console.log(data);
    setView("thanks");

    //   sendFeedback(serviceId, templateId, {
    //     from_name: name,
    //     message: message,
    //     reply_to: email,
    //   });
    // r.target.reset();
    // data.target.reset();
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const sendFeedback = (serviceId, templateId, variables) => {
    window.emailjs
      .send(serviceId, templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      .catch((err) =>
        console.error(
          "There has been an error.  Here some thoughts on the error that occured:",
          err
        )
      );
  };

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
            
              <TransitionGroup component={null}>
                <CSSTransition   key = {view} timeout={800} classNames="fadeContact">

                    { view==='form' ? (
                        <SectionCard>
                    <FormGroup>
                      <p>Want to find out more? Let's connect!</p>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <InputDiv>
                          <Label>Name</Label>
                          <input
                            {...register("name", {
                              required: "Name required!",
                            })}
                          />
                          {errors.name && (
                            <Message>{errors.name.message}</Message>
                          )}
                        </InputDiv>
                        <InputDiv>
                          <Label>Email</Label>
                          <input
                            {...register("email", {
                              required: "Email required!",
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Please check your email format!",
                              },
                            })}
                          />
                          {errors.email && (
                            <Message>{errors.email.message}</Message>
                          )}
                        </InputDiv>
                        <InputDiv>
                          <Label>Message</Label>
                          <textarea
                            rows={6}
                            resize={"vertical"}
                            {...register("message", {
                              required: "Message Required!",
                            })}
                          ></textarea>
                          {errors.message && (
                            <Message>{errors.message.message}</Message>
                          )}
                        </InputDiv>
                        <Button type="submit">Send</Button>
                      </form>
                    </FormGroup>
                    </SectionCard>
                  ) :  (
                    <ThanksDiv>
                      <ThankYou>
                        <h3>🙏 We'll be in touch soon!</h3>
                      </ThankYou>
                    </ThanksDiv>
                  )}
                </CSSTransition>
              </TransitionGroup>
            
          </AboutContainer>
        </div>
      </CSSTransition>
    </>
  );
};

export default Section;
