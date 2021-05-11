import React from "react";
import { ReactComponent as GitIcon } from "../../icons/github.svg";
import { ReactComponent as ExtLink } from "../../icons/external-link.svg";
import { ReactComponent as DlLink } from "../../icons/logo-npm.svg";
import {
  ProjCard,
  Content,
  ImgContainer,
  ProjImg,
  ContentBlock,
  ProjStack,
  ListItem,
} from "./Project.styled";

const Project = ({ content, image }) => {
  const {
    heading,
    subHeading,
    mainContent,
    gitLink,
    appLink,
    stack,
    dlLink,
  } = content;

  const git = (
    <a href={gitLink} target="_blank" rel="noreferrer">
      <GitIcon />
    </a>
  );
  const goTo = (
    <a href={appLink} target="_blank" rel="noreferrer">
      <ExtLink />
    </a>
  );

  const dl = (
    <a href={dlLink} target="_blank" rel="noreferrer">
      <DlLink />
    </a>
  );

  const projImg = (
    <a href={appLink} target="_blank" rel="noreferrer">
      <img src={image} alt="site screenshot"></img>
    </a>
  );

  return (
    <>
      <ProjCard>
        <ImgContainer>
          <ProjImg>{projImg}</ProjImg>
        </ImgContainer>
        <Content>
          <h1>{heading}</h1>
          <ContentBlock>
            <h5>{subHeading}</h5>
            <p>{mainContent}</p>
          </ContentBlock>
          {git}
          {goTo}
          {dlLink && dl}
          <ProjStack>
            {stack.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </ProjStack>
        </Content>
      </ProjCard>
    </>
  );
};

export default Project;
