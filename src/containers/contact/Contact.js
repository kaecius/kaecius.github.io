import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import ContactForm from "../../components/contactForm/ContactForm";
import {useTranslation, Trans} from "react-i18next";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  const i18n = useTranslation();

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">
              <Trans i18nKey={contactInfo.title}></Trans>
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              <Trans i18nKey={contactInfo.subtitle}></Trans>
            </p>
          </div>
          <div
            className={
              isDark ? "dark-mode contact-text-div" : "contact-text-div"
            }
          >
            <ContactForm />
            <br />
            <br />
            <SocialMedia />
          </div>
        </div>
      </div>
    </Fade>
  );
}
