import React, { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Button } from "../../styles/common/Buttons";
import { Heading } from "../../styles/common/generic";
import {
  AboutContainer,
  SectionCard,
  FormGroup,
  Label,
  Message,
  InputDiv,
  ThanksDiv,
  ThankYou,
} from "./Contact.styled";

const Contact = ({ active }) => {
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
  const contactRef = useRef(null);

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
              <CSSTransition
                nodeRef={contactRef}
                key={view}
                timeout={800}
                classNames="fadeContact"
              >
                {view === "form" ? (
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
                ) : (
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

export default Contact;
