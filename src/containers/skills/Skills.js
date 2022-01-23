import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import emoji from "react-easy-emoji";
import {useTranslation, Trans} from "react-i18next";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  const {i18n} = useTranslation();

  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              <Trans i18nKey="skills.title"></Trans>
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              <Trans i18nKey="skills.subtitle"></Trans>
            </p>
            <SoftwareSkill />
            <div>
              <p>
                <Trans
                  i18nKey="skills.list.title"
                  components={{i: <i />, strong: <strong />}}
                ></Trans>
              </p>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {emoji("💡")}
                    <Trans
                      i18nKey={skills}
                      components={{i: <i />, strong: <strong />}}
                    ></Trans>
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
