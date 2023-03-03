import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link as Scroll } from "react-scroll";

export const Sidebar = () => {
  return (
    <div id="sidebar" css={SidebarStyle}>
      <SidebarContent id="side-area">
        <nav>
          <h1 className="vibes">usagrada's portfolio</h1>
          <SidebarList>
            <Scroll to="about" smooth={true} duration={200} offset={-20}>
              <div>About</div>
            </Scroll>
            <Scroll to="interests" smooth={true} duration={200} offset={-20}>
              <div>Interests</div>
            </Scroll>
            <Scroll to="skills" smooth={true} duration={200} offset={-20}>
              <div>Skills</div>
            </Scroll>
            <Scroll to="works" smooth={true} duration={200} offset={-20}>
              <div>Works</div>
            </Scroll>
            <Scroll to="contact" smooth={true} duration={200} offset={-20}>
              <div>Contact</div>
            </Scroll>
          </SidebarList>
        </nav>
      </SidebarContent>
    </div>
  );
};

const SidebarStyle = css`
  background: rgb(255, 239, 255, 0.6);
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 32px;
    }
    div {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 450px) {
    h1 {
      font-size: 20px;
    }
    div {
      font-size: 12px;
    }
  }
`;

const SidebarContent = styled.div`
  position: fixed;
  width: min(240px, 30%);
  height: 100vh;
  top: 0;
  z-index: 1;

  nav {
    padding: 0 15px;
    height: calc(95vh - 30px);
    h1 {
      padding: 15px 0;
      text-align: center;
    }

    @media screen and (max-width: 768px) {
      height: 80vh;
      padding: 0 10px;
    }
  }
`;
const SidebarList = styled.div`
  margin: 0 20px;
  @media screen and (max-width: 600px) {
    margin: 0 5px;
  }

  list-style: none;
  text-align: center;

  div {
    font-family: "Sawarabi Mincho", sans-serif;
    padding: 5px 0;
  }

  div:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
