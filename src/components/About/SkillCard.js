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
    <div className="skill_card header_box_top_left_full_height border-bottom">
      <div className="header_title">
        <span>{category}</span>
        <button
          className="open_close_button"
          onClick={clickOnBtn}
          type="button"
        >
          {isOpened ? "-" : "+"}
        </button>
      </div>
      <div className="all_lines">
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
