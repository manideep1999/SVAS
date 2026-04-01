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
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger the animation
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 50% of the div is in the viewport
      },
    );

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
    <div className="container-fluid prayer-container px-0" ref={domRef}>
      <div
        className={`row  p-0 align-items-center glowing-container ${
          isVisible ? "animate" : ""
        }`}
      >
        <div
          className={`col-md-5 offset-md-1 order-sm-2  order-2 order-md-1 prayer-image-column
            ${isVisible ? "glowing-image" : ""}`}
        >
          <img src="img/home/diya-nobg.jpg" className="diya" alt="Candle" />
        </div>
        <div className="col-md-5  order-sm-1 order-1 order-md-2 offset-md-1 px-0">
          <div className="line">
            {isVisible &&
              lines.map((line, index) => (
                <h2
                  key={index}
                  className={`line-font ${isVisible ? "line-animate" : ""}`}
                  style={{ animationDelay: `${index * 1}s` }}
                >
                  <span>{line}</span>
                </h2>
              ))}
          </div>
        </div>
        <div className={`${isVisible ? "glow" : ""}`}></div>
      </div>
    </div>
  );
}

export default SVASPrayer;
