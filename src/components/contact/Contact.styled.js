import styled, { css, keyframes } from "styled-components";

export const ContactContainer = styled.section`
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

export const SectionCard = styled.div`
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

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: ${(props) => props.theme.blue};
  display: block;
`;

export const Message = styled.label`
  margin-bottom: 0.5em;
  padding-left: 10px;
  font-size: 0.85rem;
  color: palevioletred;
`;

export const InputDiv = styled.div`
  margin-bottom: 1.5em;
`;

export const ThankYou = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;

  h1 {
    font-size: clamp(1.5rem, 7vw, 2rem);
    font-weight: 300;
    color: ${(props) => props.theme.blue};
  }
  T h3 {
    font-weight: 100;
    margin-top: 0;
    font-size: clamp(1rem, 7vw, 2rem);
    color: ${(props) => props.theme.teal};
  }
`;

export const rotate = keyframes`{
    @property --angle {
        syntax: '<angle>';
        initial-value: 0deg;
        inherits: false;
    }
	to {
		--angle: 360deg;
	}
    }`;

export const ThanksDiv = styled.div`
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
