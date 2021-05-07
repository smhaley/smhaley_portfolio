import React from "react";
import { ReactComponent as GitIcon } from "../../icons/github.svg";
import { ReactComponent as LinkedIn } from "../../icons/linkedin.svg";
import { aboutContent } from "../about/aboutContent";
import { FooterDiv, FooterContent } from "./Footer.styled";

const Footer = () => {
  const built = (
    <h5>
      built by <span>Shawn Haley</span>
    </h5>
  );
  const gh = (
    <a href={aboutContent.linkedIn} target="_blank">
      <LinkedIn />
    </a>
  );
  const linkedIn = (
    <a href={aboutContent.github}>
      <GitIcon />
    </a>
  );

  const content = [built, gh, linkedIn];
  return (
    <FooterDiv>
      <FooterContent>
        {content.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </FooterContent>
    </FooterDiv>
  );
};

export default Footer;
