import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {Trans, useTranslation} from "react-i18next";

import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";


export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const { i18n } = useTranslation(); 
  
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                <Trans
                  i18nKey="greeting.title"
                  values={{name: greeting.username}}
                />
                <span className="wave-emoji">{emoji("😀")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                <Trans i18nKey="greeting.subtitle" />
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text={i18n.t("header.contact.me")} href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text={i18n.t("header.download.cv")}
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="portrait"
              src={require("../../assets/images/profile.jpg")}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
