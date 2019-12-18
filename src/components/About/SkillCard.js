import React from "react";
import "./SkillCard.scss";

const SkillCard = ({ data }) => {
  const { category, skills } = data;
  return (
    <div class="skill_card header_box_top_left_full_height border-bottom">
      <div class="header_title">
        <span>{category}</span>
        <button class="open_close_button" type="button">
          -
        </button>
      </div>
      <div class="all_lines">
        {skills &&
          skills.map((skill, index) => {
            const { iconFilename, name } = skill;
            return (
              <div key={index} class="skill">
                <img
                  src={`../../img/about/skills/${iconFilename}`}
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
