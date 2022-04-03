import React from "react";
import "./Footer.css";
import { ContactSocialMedia } from "../ContactSocialMedia/ContactSocialMedia";
import { FooterNav } from "./FooterNav";
import { FooterWaves } from "./FooterWaves";

export function Footer() {
  return (
    <>
      <FooterWaves />

      <footer className='footer share'>
        <div className='footer__subcontainer'>
          <ContactSocialMedia />
        </div>

        <FooterNav />

        <p className='footer__copyright'>©2022 Alayn Saez</p>
      </footer>
    </>
  );
}
