import React from "react";
import styled from "styled-components";
import Project from "./Project.js";
import PropTypes from "prop-types";

const Projects = (props) => {
  return (
    <Wrapper id="Projects">
      <TitleWrapper>
        <Title>I. Stuff I've Created</Title>
        <TitleLine></TitleLine>
      </TitleWrapper>
      <ProjectsWrapper>
        <Project></Project>
      </ProjectsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 275px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: normal;
  letter-spacing: 1.25px;
  font-size: 18px;
`;

const TitleLine = styled.div`
  width: 275px;
  border-top: 1.5px solid black;
  margin-left: 30px;
  margin-top: 1.5px;
`;

const ProjectsWrapper = styled.div``;

Projects.propTypes = {};

export default Projects;
