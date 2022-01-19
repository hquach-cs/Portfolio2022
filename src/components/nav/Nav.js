import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Nav = (props) => {
  return (
    <Wrapper>
      <Logo>
        <h2>HQ</h2>
      </Logo>
      <LinksWrapper>
        <Links href="#Projects">I. Projects</Links>
        <Links href="#About">II. About</Links>
        <Links href="#Contacts">III. Contacts</Links>
        <Resume>Resume</Resume>
      </LinksWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 275px;
`;

const Logo = styled.a``;

const LinksWrapper = styled.div`
  float: right;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Links = styled.a`
  cursor: pointer;
  display: inline;
  margin: 15px 25px 15px 25px;
  font-size: 12;
  color: black;
  text-decoration: none;
  display: inline-block;
  position: relative;

  &:after {
    content: " ";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: black;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const Resume = styled.a`
  cursor: pointer;
  border: black 1px solid;
  border-radius: 5px;
  padding: 7px 15px 7px 15px;
  background-color: black;
  color: white;
  font-size: 12;
`;

export default Nav;
