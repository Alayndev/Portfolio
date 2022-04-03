import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { PortfolioList } from "../../components/PortfolioList/PortfolioList";

import { Footer } from "../../components/Footer/Footer";

// Aplicar composicion de componentes. Guarme con TodoList y TodoItem en 2do curso, replicar con PortfolioList y PortfolioItem
export function PortfolioPage() {
  return (
    <>
      <Navbar />

      <section className="portfolio">
        <h1 className="heading">
          <span>my</span> work
        </h1>

        <PortfolioList />

        <a
          href="https://github.com/Alayndev?tab=repositories"
          target="_blank"
          className="btn"
        >
          See more <i className="fas fa-arrow-right"></i>
        </a>
      </section>

      <Footer />
    </>
  );
}
