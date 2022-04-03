import React from "react";
import skillsJSON from "../../skills.json";
import { SkillsItem } from "../SkillsItem/SkillsItem";

export function SkillsList() {
  return (
    <div className="box-container">
      {skillsJSON.map((skill) => {
        return (
          <SkillsItem key={skill.title} title={skill.title} img={skill.img} />
        );
      })}
    </div>
  );
}
