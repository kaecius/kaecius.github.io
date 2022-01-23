import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import {useTranslation, Trans} from "react-i18next";

export default function Education() {
  const i18n = useTranslation();
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">
          <Trans i18nKey="education.title"></Trans>
        </h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
