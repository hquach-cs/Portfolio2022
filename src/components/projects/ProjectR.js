import React from "react";
import styled from "styled-components";
import "./projects.css";
import PropTypes from "prop-types";

const ProjectR = (props) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  });
  return (
    <div className={`fade-in ${isVisible ? "visible" : ""}`} ref={domRef}>
      <PictureWrapper></PictureWrapper>

      <TextWrapper>
        <Role>Developer</Role>
        <Title>Project's Title</Title>
        <Context>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
          aliquam id diam maecenas ultricies. In tellus integer feugiat
          scelerisque varius morbi. Magna eget est lorem ipsum. Enim lobortis
          scelerisque fermentum dui faucibus in ornare quam viverra. Faucibus
          interdum posuere lorem ipsum dolor sit amet.
        </Context>
        <Skills>
          <Skill>Placeholder</Skill>
          <Skill>Placeholder</Skill>
          <Skill>Placeholder</Skill>
          <Skill>Placeholder</Skill>
          <Skill>Placeholder</Skill>
        </Skills>
      </TextWrapper>
    </div>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 350px;
  display: flex;
`;

const TextWrapper = styled.div`
  width: 450px;
  right: -50px;
  text-align: right;
`;

const Role = styled.h3`
  font-weight: normal;
`;

const Title = styled.h2`
  font-weight: normal;
`;

const Context = styled.p`
  background-color: gray;
  padding: 15px;
  text-align: center;
  margin: 5px 0px;
`;

const Skills = styled.div`
  display: flex;
`;

const Skill = styled.p`
  padding-left: 15px;
`;

const PictureWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 250px;
  background-color: lightgray;
  z-index: -1;
  margin-right: -60px;
`;

ProjectR.propTypes = {};

export default ProjectR;
