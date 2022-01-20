import React from "react";
import styled from "styled-components";
import ProjectL from "./ProjectL.js";
import ProjectR from "./ProjectR.js";
import "./projects.css";
import PropTypes from "prop-types";

const Projects = (props) => {
  return (
    <Wrapper id="Projects">
      <TitleWrapper>
        <Title>I. Stuff I've Created</Title>
        <TitleLine></TitleLine>
      </TitleWrapper>
      <ProjectsWrapper>
        <ProjectL></ProjectL>
        <ProjectR></ProjectR>
      </ProjectsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 20%;
  @media (max-width: 899px) {
    margin: 0 35px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: normal;
  letter-spacing: 1.25px;
  font-size: 18px;
  white-space: nowrap;
`;

const TitleLine = styled.div`
  width: 275px;
  border-top: 1.5px solid black;
  margin-left: 30px;
  margin-top: 1.5px;
`;

const ProjectsWrapper = styled.div`
  padding-top: 25px;
`;

Projects.propTypes = {};

export default Projects;
