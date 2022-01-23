import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i
                  className={
                    skills.fontAwesomeClassname
                      ? skills.fontAwesomeClassname
                      : "fas fa-wrench"
                  }
                ></i>
                <p>
                  <strong>{skills.skillName}</strong>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
