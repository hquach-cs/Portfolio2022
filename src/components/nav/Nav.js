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
        <Links>I. Projects</Links>
        <Links>II. About</Links>
        <Links>III. Contacts</Links>
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
  margin-left: 250px;
  margin-right: 250px;
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
