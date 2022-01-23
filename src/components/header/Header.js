import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {useTranslation, Trans} from "react-i18next";
import {
  greeting,
  educationInfo,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection
} from "../../portfolio";

const lngs = {
  en: {nativeName: "English"},
  es: {nativeName: "Español"}
};

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewEducation = educationInfo.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const {i18n} = useTranslation();

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">
                <Trans i18nKey="header.skills"></Trans>
              </a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href="#education">
                <Trans i18nKey="header.education"></Trans>
              </a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">
                <Trans i18nKey="header.work.experience"></Trans>
              </a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">
                <Trans i18nKey="header.open.source"></Trans>
              </a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">
                <Trans i18nKey="header.achievements"></Trans>
              </a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">
                <Trans i18nKey="header.blogs"></Trans>
              </a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">
                <Trans i18nKey="header.talks"></Trans>
              </a>
            </li>
          )}
          <li>
            <a href="#contact">
              <Trans i18nKey="header.contact.me"></Trans>
            </a>
          </li>
          <li id="lang">
            <select
              value={i18n.language}
              onChange={e => i18n.changeLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
