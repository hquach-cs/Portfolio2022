import "./App.css";
import styled from "styled-components";
import Nav from "./components/nav/Nav.js";
import Icons from "./components/nav/Icons.js";
import Projects from "./components/projects/Projects.js";

export default function App() {
  return (
    <Wrapper className="app">
      <Nav></Nav>
      <Icons></Icons>
      <Main>
        <Projects></Projects>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Main = styled.main``;
