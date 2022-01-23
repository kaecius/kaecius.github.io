import React, {createRef, useContext} from "react";
import {useForm, ValidationError} from "@formspree/react";
import {Fade, Slide} from "react-reveal";
import "./ContactForm.scss";
import StyleContext from "../../contexts/StyleContext";
import {useTranslation, Trans} from "react-i18next";
import "../button/Button.scss";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xpzbqbye");
  const {isDark} = useContext(StyleContext);
  const i18n = useTranslation();

  if (state.succeeded) {
    return (
      <p>
        <Trans i18nKey="contact.thanks"></Trans>
      </p>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className={isDark ? "dark-mode contact-form" : "contact-form"}
    >
      <label htmlFor="email">
        <Trans i18nKey="contact.email"></Trans>
      </label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">
        <Trans i18nKey="contact.message"></Trans>
      </label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button className="main-button" type="submit" disabled={state.submitting}>
      <Trans i18nKey="contact.submit"></Trans>
      </button>
    </form>
  );
}
