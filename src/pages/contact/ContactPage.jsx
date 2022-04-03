import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { ContactData } from "../../components/ContactData/ContactData";
import { ContactSocialMedia } from "../../components/ContactSocialMedia/ContactSocialMedia";
import { ContactForm } from "../../components/ContactForm/ContactForm";

import { Footer } from "../../components/Footer/Footer";


export function ContactPage() {
  return (
    <>
      <Navbar />

      <section className='contact'>
        <h1 className='heading'>
          contact <span>me</span>
        </h1>

        <div className='row'>
          <div className='info-container'>
            <ContactData />

            <ContactSocialMedia />
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
