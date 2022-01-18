import React from "react";
import styled from "styled-components";
import github from "./icons/github@256px.png";
import gmail from "./icons/google@256px.png";
import linkedin from "./icons/linkedin@256px.png";
import twitch from "./icons/twitch@256px.png";

import PropTypes from "prop-types";

const Icons = (props) => {
  return (
    <Wrapper>
      <IconsWrapper>
        <Icon href="https://github.com/hquach-cs" target="_blank">
          <IconImg src={github} alt="Github"></IconImg>
        </Icon>
        <Icon href="mailto:hquach.cs@gmail.com">
          <IconImg src={gmail} alt="GMail"></IconImg>
        </Icon>
        <Icon
          href="https://www.linkedin.com/in/henryquach0821/"
          target="_blank"
        >
          <IconImg src={linkedin}></IconImg>
        </Icon>
        <Icon href="/">
          <IconImg src={twitch} alt="Twitch"></IconImg>
        </Icon>
      </IconsWrapper>
      <EmailWrapper>
        <Email>hquach.cs@gmail.com</Email>
        <EmailLine></EmailLine>
      </EmailWrapper>
    </Wrapper>
  );
};

Icons.propTypes = {};

const Wrapper = styled.div``;

const IconsWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 3%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
`;

const Icon = styled.a`
  cursor: pointer;
  margin: 5px 0;
`;

const IconImg = styled.img`
  width: 32px;
  height: 32px;
  &:hover {
    background-color: lightgreen;
  }
  border-radius: 50%;
`;

const EmailWrapper = styled.div``;

const Email = styled.h3`
  position: fixed;
  top: 80%;
  left: 2.9%;
  transform: translate(-50%, -50%) rotate(-90deg);
  font-size: 10px;
  letter-spacing: 0.2em;
`;

const EmailLine = styled.div`
  position: fixed;
  top: 91%;
  left: 2.9%;
  border-left: 1px solid black;
  height: 400px;
`;

export default Icons;
