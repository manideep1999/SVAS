import React, { useState, useEffect } from "react";
import "./SVASPrayer.css";
function SVASPrayer() {
  const lines = [
    "om ajñāna-timirāndhasya",
    "jñānāñjana-śalākayā|",
    "chakṣurunmīlitaṁ yena",
    "tasmai śrī-gurave namaḥ||",
  ];

  return (
    <div className="container-fluid px-0">
      <div className="row p-0 align-items-center glowing-container">
        <div className="col-md-5 offset-md-1 image-column">
          <img
            src="img/home/diya-nobg.jpg"
            className="glowing-image"
            alt="Candle"
          />
        </div>
        <div class="col-md-5 offset-md-1 px-0">
          <div className="line">
            {lines.map((line, index) => (
              <h2
                key={index}
                className="line-font line-animate"
                style={{ animationDelay: `${index * 4}s` }}
              >
                {line}
              </h2>
            ))}
          </div>
        </div>
        <div className="glow"></div>
      </div>
    </div>
  );
}
export default SVASPrayer;

/*  <div className="container-fluid prayer-container image-div">
      <div className="row color-change-section">
        <div className="col-md-6 block-display glowing-image ">
          <div className="glow"></div>
          <img src="img/diya.jpg" className="img-fit" alt="Line 2 Image" />
        </div>
        <div className="col-md-6">
          <div key="0" className=" line">
            {lines[0]}
          </div>
        </div>
      </div>
    </div>
  );
*/

/*return (
    <div
      className={`text-containe container-fluid ${
        colors[currentLine % colors.length]
      }`}
    >
      <div className="row">
        <div className="col-md-6 col-lg-6">
          {currentLine !== 0 && (
            <img
              src="img/masterpics/lighthouse.jpg"
              alt="Line 2 Image"
              className="line-image"
            />
          )}
        </div>
        <div className="col-md-6 col-lg-6">
          {lines.slice(0, currentLine + 1).map((line, index) => (
            <div key={index} className=" line">
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  ); */
