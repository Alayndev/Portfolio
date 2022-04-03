import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

export function HomePage() {
  return (
    <>
      <Navbar />

      <section className='home'>
        <div className='image'>
          <img src='https://res.cloudinary.com/daxkw95yw/image/upload/v1649029908/c8prko9e4ycpkud3gg9c.jpg' alt='personal-foto' />
        </div>

        <div className='content'>
          <h3>Hi, I am Alayn Saez</h3>
          <div className=''>
            <span>Full-stack developer</span>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet porro
            facere expedita ab atque a consectetur odit vel soluta itaque.
          </p>

          <Link to='/about' className='btn'>
            about me <i className='fas fa-user'></i>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
