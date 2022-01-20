import React from "react";
import styled from "styled-components";
import "./projects.css";
import PropTypes from "prop-types";

const ProjectL = (props) => {
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
      <PictureWrapper></PictureWrapper>
    </div>
  );
};

const Wrapper = styled.div``;

const TextWrapper = styled.div`
  width: 450px;
  right: -50px;
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
  padding-right: 15px;
`;

const PictureWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 250px;
  background-color: lightgray;
  z-index: -1;
  margin-left: -60px;
`;

ProjectL.propTypes = {};

export default ProjectL;
