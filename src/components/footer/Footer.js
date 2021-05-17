import React from "react";
import { ReactComponent as GitIcon } from "../../icons/github.svg";
import { ReactComponent as LinkedIn } from "../../icons/linkedin.svg";
import { ReactComponent as GitBranch } from "../../icons/git-branch.svg";
import { aboutContent, siteLink } from "../content";
import { FooterDiv, FooterContent } from "./Footer.styled";

const Footer = () => {
  const built = (
    <h5>
      built by <span>Shawn Haley</span>
    </h5>
  );
  const gh = (
    <a href={aboutContent.linkedIn} target="_blank" rel="noreferrer">
      <LinkedIn />
    </a>
  );
  const linkedIn = (
    <a href={aboutContent.github} target="_blank" rel="noreferrer">
      <GitIcon />
    </a>
  );
  const branch = (
    <a href={siteLink} target="_blank" rel="noreferrer">
      <GitBranch />
    </a>
  );

  const content = [built, gh, branch, linkedIn];
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
