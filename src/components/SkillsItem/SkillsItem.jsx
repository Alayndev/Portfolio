import React from "react";

export function SkillsItem({ img, title }) {
  return (
    <div className='box'>
      <img src={img} />
      <h3> {title} </h3>
    </div>
  );
}
