import React, { useState } from "react";
import "./SkillCard.scss";

const SkillCard = ({ data }) => {
  const { category, skills } = data;
  let [isOpened, setIsOpened] = useState(false);

  function clickOnBtn(e) {
    setIsOpened(!isOpened);
    console.log(isOpened);
  }

  return (
    <div className="skill-card header-box-top-left-full-height border-bottom">
      <div className="header-title">
        <span>{category}</span>
        <button
          className="open-close-button"
          onClick={clickOnBtn}
          type="button"
        >
          {isOpened ? "Fermer" : "Voir"}
        </button>
      </div>
      <div className="all-lines">
        {isOpened &&
          skills.map((skill, index) => {
            const { iconFilename, name } = skill;
            return (
              <div key={index} className="skill">
                <img
                  src={require(`img/about/skills/${iconFilename}`)}
                  alt={`Skill ${name}`}
                />
                <span>{name}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SkillCard;
