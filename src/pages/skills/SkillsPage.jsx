import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { SkillsList } from "../../components/SkillsList/SkillsList";

import { Footer } from "../../components/Footer/Footer";

export function SkillsPage() {
  return (
    <>
      <Navbar />

      <section className='skills'>
        <h1 className='heading'>
          <span>my</span> skills
        </h1>

        <SkillsList />
      </section>

      <Footer />
    </>
  );
}
