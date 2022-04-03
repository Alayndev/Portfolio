import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/'>
        <i className='fas fa-home'></i> <span>Home</span>
      </Link>

      <Link to='/about'>
        <i className='fas fa-user'></i> <span>About</span>
      </Link>

      <Link to='/portfolio'>
        <i className='fas fa-briefcase'></i> <span>Portfolio</span>
      </Link>

      <Link to='/skills'>
        <i className='fas fa-desktop'></i> <span>Skills</span>
      </Link>

      <Link to='/contact'>
        <i className='fas fa-address-book'></i> <span>Contact</span>
      </Link>
    </nav>
  );
}
