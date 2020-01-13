import React from "react";
import "./SkillCard.scss";

const SkillCard = ({ data }) => {
  const { category, skills } = data;

  return (
    <div className="skill-card">
      <div className="header-title">
        <span>{category}</span>
      </div>
      <div className="all-lines">
        {skills.map((skill, index) => {
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
