import React, { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Heading } from "../../styles/common/generic";
import { Button } from "../../styles/common/Buttons";
import { serviceId, templateId } from "../../constants/emailKeys";
import {
  ContactContainer,
  ThanksDiv,
  ThankYou,
  SectionCard,
  FormGroup,
  Label,
  Message,
  InputDiv,
} from "./Contact.styled";

const Contact = ({ active }) => {
  const nodeRef = useRef(null);

  const formRef = useRef(null);
  const thanksRef = useRef(null);

  const content = [
    { id: "form", ref: formRef },
    { id: "thanks", ref: thanksRef },
  ];

  const [show, setShow] = useState(false);

  const onSubmit = (data) => {
    setView(content[1]);
    sendFeedback(serviceId, templateId, {
      from_name: data.name,
      message: data.message,
      reply_to: data.email,
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendFeedback = (serviceId, templateId, variables) => {
    window.emailjs
      .send(serviceId, templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      .catch((err) => console.error(err));
  };

  const [view, setView] = useState(content[0]);

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
          <ContactContainer show={show}>
            <Heading>
              <h3>{`<Contact/>`}</h3>
            </Heading>
            <SwitchTransition mode={"out-in"}>
              <CSSTransition
                nodeRef={view.ref}
                key={view.id}
                timeout={600}
                classNames="fadeContact"
              >
                {view.id === "form" ? (
                  <SectionCard ref={formRef}>
                    <FormGroup>
                      <p>
                        Want to find out more? <span> Let's connect!</span>
                      </p>

                      <form onSubmit={handleSubmit(onSubmit)}>
                        <InputDiv>
                          <Label htmlFor="name" aria-labelledby="name">
                            Name
                          </Label>
                          <input
                            id="name"
                            {...register("name", {
                              required: "Name required!",
                            })}
                          />
                          <Message>
                            {errors.name && errors.name.message}
                          </Message>
                        </InputDiv>
                        <InputDiv>
                          <Label htmlFor="email" aria-labelledby="email">
                            Email
                          </Label>
                          <input
                            id="email"
                            {...register("email", {
                              required: "Email required!",
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Please check your email format!",
                              },
                            })}
                          />

                          <Message>
                            {errors.email && errors.email.message}
                          </Message>
                        </InputDiv>
                        <InputDiv>
                          <Label htmlFor="message" aria-labelledby="message">
                            Message
                          </Label>
                          <textarea
                            id="message"
                            rows={6}
                            resize={"vertical"}
                            {...register("message", {
                              required: "Message Required!",
                            })}
                          ></textarea>
                          <Message>
                            {errors.message && errors.message.message}
                          </Message>
                        </InputDiv>
                        <Button type="submit" aria-label="send">
                          Send
                        </Button>
                      </form>
                    </FormGroup>
                  </SectionCard>
                ) : (
                  <ThanksDiv ref={thanksRef}>
                    <ThankYou>
                      <h3>🙏 We'll be in touch soon!</h3>
                    </ThankYou>
                  </ThanksDiv>
                )}
              </CSSTransition>
            </SwitchTransition>
          </ContactContainer>
        </div>
      </CSSTransition>
    </>
  );
};

export default Contact;
