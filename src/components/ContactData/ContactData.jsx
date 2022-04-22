import React from "react";

export function ContactData() {
  return (
    <>
      <h1>get in touch</h1>

      <div className="box-container">
        <div className="box">
          <i className="fas fa-map"></i>
          <div className="info">
            <h3>Address :</h3>
            <p>Buenos Aires, Argentina</p>
          </div>
        </div>

        <div className="box">
          <i className="fas fa-envelope"></i>
          <div className="info">
            <h3>Email :</h3>
            <p>saezalayn@gmail.com</p>
          </div>
        </div>

        <div className="box">
          <i className="fab fa-linkedin"></i>
          <div className="info">
            <h3>Linkedin :</h3>
            <p>linkedin.com/in/alayn-saez</p>
          </div>
        </div>
      </div>
    </>
  );
}
