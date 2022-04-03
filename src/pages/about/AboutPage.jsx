import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { AboutPersonalInfo } from "../../components/AboutPersonalInfo/AboutPersonalInfo";
import { AboutParagraph } from "../../components/AboutParagraph/AboutParagraph";

import { Footer } from "../../components/Footer/Footer";

export function AboutPage() {
  return (
    <>
      <Navbar />

      <section className='about'>
        <h1 className='heading'>
          about <span>me</span>
        </h1>

        <div className='row'>
          <AboutPersonalInfo />

          <AboutParagraph />
        </div>
      </section>

      <Footer />
    </>
  );
}
