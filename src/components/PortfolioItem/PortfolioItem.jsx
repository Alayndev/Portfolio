import React, { useState } from "react";

export function PortfolioItem({ description, title, link, code }) {
  const [showHover, setShowHover] = useState(false);

  return (
    <div>
      <div className="count-container">
        <div
          id="portfolio-box"
          className="box"
          onMouseEnter={() => setShowHover(true)}
          onMouseLeave={() => setShowHover(false)}
        >
          <div className="title-descrip-section">
            <h3 id="portfolio-title">{title}</h3>
            <p id="portfolio-description"> {description} </p>
          </div>

          {showHover ? (
            <div className="subcontainer">
              <div className="otro-cont">
                <p> See the Demo and the Source Code of this project here.</p>
                <div>
                  <a href={link} target="_blank" className="btn">
                    Demo <i className="fas fa-arrow-right"></i>
                  </a>
                </div>

                <div>
                  <a
                    href={code}
                    rel="noreferrer"
                    className="btn"
                    target="_blank"
                  >
                    Source Code <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ) : null}

          {/* <div className="subcontainer">
            <div>
              <a href={link} target="_blank" className="btn">
                Demo <i className="fas fa-arrow-right"></i>
              </a>
            </div>

            <div>
              <a href={code} rel="noreferrer" className="btn" target="_blank">
                Source Code <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
