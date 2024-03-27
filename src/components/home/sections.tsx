import clsx from "clsx";
import styled from "@emotion/styled";
import { skills } from "./skill-list";
import { Card } from "@mui/material";

export const AboutSection = () => {
  return (
    <section>
      <h3 id="about">About</h3>
      <p className="about-detail blue-glass">
        Software Enginner
        {/* Graduate School of Information Science and Technology, The University of
        Tokyo
        <br />
        Information & Communication Engineering
        <br />
        M1 (ICE2022) */}
        {/* <!-- Information & Communication Engineering -->
      <!-- Faculty of Engineering<br /> -->
      <!-- Department of Electronic Information Engineering <br /> -->
      <!-- B4 (eeic2020) --> */}
      </p>
    </section>
  );
};

export const InterestSection = () => {
  return (
    <section id="interests-section">
      <h3 id="interests">Interests</h3>
      <p className="about-detail blue-glass">
        Front-end / Back-end <br />
        UI Design <br />
        Game Programming <br />
        Compiler
      </p>
    </section>
  );
};

const ContactLink = styled.a`
  padding: 10px;
  &:hover button span {
    text-decoration: underline;
  }
`;

export const ContactSection = () => {
  return (
    <section id="contact-section">
      <h3 id="contact">Contact</h3>
      <div className="blue-glass">
        <ContactLink href="https://github.com/usagrada" target="_blank">
          <Icon className="mdi mdi-github" />
          <span> GitHub </span>
        </ContactLink>
        <ContactLink href="/docs" target="_blank">
          <Icon className="mdi mdi-github" />
          <span> Blog </span>
        </ContactLink>
      </div>
    </section>
  );
};

const SkillArea = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto;

  #frontend-article {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
  #backend-article {
    grid-row: 1 / 3;
    grid-column: 2 / 3;
  }
  #misc-article {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }
`;

const SkillNames = styled.div`
  padding-bottom: 10px;
  .skill-name {
    .frameworks {
      padding: 5px 10px;
      font-size: 10px;
    }
    i {
      width: 24px;
      margin-right: 5px;
    }
  }
`;

export const SkillSection = () => {
  return (
    <section id="skills-section">
      <h3 id="skills">Skills</h3>

      <SkillArea>
        <Article id="frontend-article" className="blue-glass">
          {/* <!-- frontend --> */}
          <h4>Front-end</h4>
          <SkillNames>
            {skills.frontend.map((skill) => {
              return (
                <div id="skill-name" className="skill-name" key={skill.name}>
                  <Icon className={clsx("mdi", skill.icon)} />
                  {skill.name}
                </div>
              );
            })}
          </SkillNames>
        </Article>

        <Article id="backend-article" className="blue-glass">
          {/* <!-- backend --> */}
          <h4>Back-end</h4>
          <SkillNames>
            {skills.backend.map((skill) => (
              <div id="back-skill-name" className="skill-name" key={skill.name}>
                <Icon className={clsx("mdi", skill.icon)} />
                {skill.name}
                <div className="frameworks">{skill.framework.join(" / ")}</div>
              </div>
            ))}
          </SkillNames>
        </Article>

        <Article id="misc-article" className="blue-glass">
          {/* misc */}
          <h4>Misc</h4>
          <SkillNames>
            {skills.misc.map((skill) => (
              <div id="misc-skill-name" className="skill-name" key={skill.name}>
                <Icon className={clsx("mdi", skill.icon)} />
                {skill.name}
              </div>
            ))}
          </SkillNames>
        </Article>
      </SkillArea>
    </section>
  );
};

export const WorkSection = () => {
  return (
    <section id="work-section">
      <h3 id="works">Works</h3>
      <WorkDetail className="blue-glass">
        <WorkElement>
          <a
            href="https://2021.eeic.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure className="work-img">
              <WorkImg src="/img/eeic-mayfes.png" />
              <figcaption style={{ color: "white" }}>
                近未来体験 2021
              </figcaption>
            </figure>
          </a>
          <div className="work-description">
            「ゲームAI」や「謎解き」企画のシステム作成などに関わりました
          </div>
        </WorkElement>
        <WorkElement>
          <a
            href="https://github.com/usagrada/satysfi-formatter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure className="work-img">
              <WorkImg src="/img/satysfi-formatter.png" />
              <figcaption style={{ color: "black" }}>
                SATySFi formatter
              </figcaption>
            </figure>
          </a>
          <div className="work-description">formatter の実装を行いました</div>
        </WorkElement>
      </WorkDetail>
    </section>
  );
};

const WorkDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const WorkElement = styled(Card)`
  @media screen and (min-width: 769px) {
    width: 45%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  margin: 10px;
  /* padding: 0 0 10% 0; */
  pointer-events: none;

  .work-description {
    font-size: 14px;
  }
  .work-img {
    position: relative;
    pointer-events: auto;
    &:hover img {
      filter: blur(3px);
    }
    figcaption {
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
    &:hover figcaption {
      display: block;
      font-size: 18px;
      color: white;
    }
  }
`;

const WorkImg = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  margin: 0;
  align-items: center;
`;

const Icon = styled.i`
  display: inline-block;
`;

const Article = styled.article`
  padding: 15px;
`;
