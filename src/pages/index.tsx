import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Background from "../components/three/Background";
import {
  AboutSection,
  ContactSection,
  InterestSection,
  SkillSection,
  WorkSection,
} from "../components/home/sections";
import Head from "@docusaurus/Head";
import styled from "@emotion/styled";
import { Sidebar } from "../components/Sidebar";
import init from "../components/wasm/target/wasm_test";

init().catch((error) => {
  if (!error.message.startsWith("Using exceptions for control flow, don't mind me. This isn't actually an error!")) {
    throw error;
  }
});

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div className="resetcss">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Roboto:ital,wght@0,100;0,300;1,100;1,300&family=Sawarabi+Mincho&display=swap"
        />
      </Head>
      <Background />
      <GridArea>
        <Sidebar />
        <main>
          <AboutSection />
          <InterestSection />
          <SkillSection />
          <WorkSection />
          <ContactSection />
          <Footer>
            <div>&copy; 2021 usagrada</div>
          </Footer>
        </main>
      </GridArea>
    </div>
  );
}

const GridArea = styled.div`
  display: grid;
  grid-template-columns: min(240px, 30%) 1fr;

  div {
    grid-column: 1 / 2;
  }
  main {
    grid-column: 2 / 3;
    padding: 20px;
  }
`;

const Footer = styled.footer`
  text-align: center;
  /* color: #fff; */
  font-size: 12px;
  @media screen and (max-width: 768px) {
    .colorchange {
      font-size: 8px;
    }
  }
  .colorchange {
    cursor: pointer;
  }
`;
