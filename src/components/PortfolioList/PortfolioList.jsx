import React from "react";
import porfolioJSON from "../../portfolio.json";
import { PortfolioItem } from "../PortfolioItem/PortfolioItem";

export function PortfolioList() {
  return (
    <div className="box-container">
      {porfolioJSON.map((project) => {
        return (
          <PortfolioItem
            key={project.title}
            title={project.title}
            description={project.description}
            link={project.link}
            code={project.code}
          />
        );
      })}
    </div>
  );
}
