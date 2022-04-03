import React from "react";
import { Link } from "react-router-dom";

export function FooterNav() {
  return (
    <>
      <div className='footer_nav-container'>
        <Link to='/'>
          <h5 className='footer__nav'>Home</h5>
        </Link>

        <Link to='/about'>
          <h5 className='footer__nav'>About</h5>
        </Link>

        <Link to='/portfolio'>
          <h5 className='footer__nav'>Portfolio</h5>
        </Link>

        <Link to='/skills'>
          <h5 className='footer__nav'>Skills</h5>
        </Link>

        <Link to='/contact'>
          <h5 className='footer__nav'>Contact</h5>
        </Link>
      </div>
    </>
  );
}
