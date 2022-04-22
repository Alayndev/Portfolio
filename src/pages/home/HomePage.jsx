import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

export function HomePage() {
  return (
    <>
      <Navbar />

      <section className="home">
        <div className="image">
          <img
            src="https://res.cloudinary.com/daxkw95yw/image/upload/v1650665040/n5kqzeskdcn1da5ffxvo.png"
            alt="personal-foto"
          />
        </div>

        <div className="content">
          <h3>Hi, I am Alayn Saez</h3>
          <div className="">
            <span>Full-stack developer</span>
          </div>
          <p>
            A passionate Full Stack Web Developer having an experience of
            building Web applications with JavaScript / TypeScript / Reactjs /
            Nodejs / Express and some other cool libraries and frameworks.
          </p>

          <Link to="/about" className="btn">
            About me <i className="fas fa-user"></i>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
