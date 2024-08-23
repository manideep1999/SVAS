import React, { useState, useEffect, useRef } from "react";
import "./SVASPrayer.css";

function SVASPrayer() {
  const lines = [
    "om ajñāna-timirāndhasya",
    "jñānāñjana-śalākayā|",
    "chakṣurunmīlitaṁ yena",
    "tasmai śrī-gurave namaḥ||",
  ];

  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div className="container-fluid px-0" ref={domRef}>
      <div
        className={`row p-0 align-items-center glowing-container ${
          isVisible ? "animate" : ""
        }`}
      >
        <div className="col-md-5 offset-md-1 image-column">
          <img
            src="img/home/diya-nobg.jpg"
            className="glowing-image"
            alt="Candle"
          />
        </div>
        <div className="col-md-5 offset-md-1 px-0">
          <div className="line">
            {lines.map((line, index) => (
              <h2
                key={index}
                className={`line-font ${isVisible ? "line-animate" : ""}`}
                style={{ animationDelay: `${index * 4}s` }}
              >
                <span>{line}</span>
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
