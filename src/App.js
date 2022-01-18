import "./App.css";
import styled from "styled-components";
import Nav from "./components/nav/Nav.js";
import Icons from "./components/nav/Icons.js";

export default function App() {
  return (
    <Wrapper className="app">
      <Nav></Nav>
      <Icons></Icons>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
