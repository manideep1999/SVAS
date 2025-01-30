import React, { useState } from "react";

const images = [
  "./img/flipcard/lotus2.jpg",
  "./img/flipcard/sunrise.jpg",
  "./img/flipcard/mountain.jpg",
  "./img/flipcard/tree.jpg",
];
function SVASSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <article id="demo" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key="index"
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to={index}
            className="active"
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
      {/*  The slideshow/carousel */}

      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={image} alt="Los Angeles" className="d-block w-50" />
          </div>
        ))}
      </div>

      {/* Left and right controls/icons --> */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </article>
  );
}
export default SVASSlider;
