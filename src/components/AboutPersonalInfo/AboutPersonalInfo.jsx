import React from "react";

export function AboutPersonalInfo() {
  return (
    <div className="info-container">
      <h1>personal info</h1>

      <div className="box-container">
        <div className="box">
          <h3>
            <span>Name : </span> Alayn Saez
          </h3>
          <h3>
            <span>Age : </span> 21
          </h3>
          <h3>
            <span>Email : </span> saezalayn@gmail.com
          </h3>
          <h3>
            <span>Address : </span> Buenos Aires, Argentina
          </h3>
        </div>

        <div className="box">
          <h3>
            <span>Freelance : </span> Available
          </h3>
          <h3>
            <span>Skill : </span> Full-stack
          </h3>
          <h3>
            <span>Language : </span> Spanish, English
          </h3>
        </div>
      </div>

      <a
        className="btn"
        href="https://drive.google.com/file/d/10W7CJ-tJMgBi4ntfvNiUQbZR78JAtxSe/view?usp=sharing"
        target="_blank"
      >
        Download CV <i className="fas fa-download"></i>
      </a>
    </div>
  );
}
