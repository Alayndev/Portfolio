import React from "react";

export function ContactData() {
  return (
    <>
      <h1>get in touch</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorem
        sunt sapiente vel minus eaque voluptate fugit corrupti omnis tempora?
      </p>

      <div className='box-container'>
        <div className='box'>
          <i className='fas fa-map'></i>
          <div className='info'>
            <h3>Address :</h3>
            <p>Buenos Aires, Argentina</p>
          </div>
        </div>

        <div className='box'>
          <i className='fas fa-envelope'></i>
          <div className='info'>
            <h3>Email :</h3>
            <p>alaynsaez@gmail.com</p>
          </div>
        </div>

        <div className='box'>
          <i className='fab fa-linkedin'></i>
          <div className='info'>
            <h3>Linkedin :</h3>
            <p>linkedin.com/alayn-saez</p>
          </div>
        </div>
      </div>
    </>
  );
}