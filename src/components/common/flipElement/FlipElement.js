// App.js
import React, { useState, useEffect } from "react";
import "./FlipElement.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FlipCircle from "./FlipCircle";

const slides = [
  {
    image: "./img/flipcard/lotus2.jpg",
    text: "Spirituality is brilliance. Spirituality is jnana. Spirituality is a path of light that guides you. It is an illusion that you and spirituality are both separate. When you are born on this earth you are born along with prana, living with breath. In the same prana a divine form- the divinity, also comes along with you. For you, under the illusion that you are the jeevatma in the external world, that divine consciousness gives a form - “I”. The path to the divine consciousness from the “I” which is formed from the same divine consciousness- is spirituality. That is YOU.",
    heading: "Spirituality",
  },
  {
    image: "./img/flipcard/sunrise.jpg",
    text: "Meditation gives you peace. It gives you tranquility, gives you energy, gives you happiness, enhances your thinking, gives clarity to your thoughts. Brings integrity into your life",
    heading: "Meditation",
  },
  {
    image: "./img/flipcard/mountain.jpg",
    text: " Life is wholeness, integrity . Life is  supreme. Life is a great opportunity that God has bestowed you with.Strangely enough, you are looking at the life happening outside while life is happening inside of you.",
    heading: "Life",
  },
  {
    image: "./img/flipcard/tree.jpg",
    text: "To attain the ultimate state in the journey of spiritual life one must do Sadhana. Sadhana means to conquer your mind and win over yourself. The first Sadhana you need to do is to coordinate your Manas(mind), Buddhi(intellect) Indriyas and Gnanendriyas(5 senses of perception). When your sadana takes you from this state of harmony between Manas, Buddhi, Indriyas and Gnanendriyas to the state of oneness , from the state of oneness to the state of divinity and then it becomes complete. To achieve that state, one has to work hard with self discipline (internal & external) in their spiritual practice.",
    heading: "Sadana",
  },
];

function FlipElement() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
      );
      setIsTransitioning(false);
    }, 1000); // Match the CSS transition duration
  };

  const handleNext = () => {
    setIsTransitioning(true);
   
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setIsTransitioning(false);
    }, 1000); // Match the CSS transition duration
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{
          transform: `rotateY(-${currentIndex * 90}deg) `,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentIndex ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: `rotateY(${index * 90}deg)  translateZ(400px)`,
            }}
          >
            <FlipCircle
              key={index}
              imageUrl={slide.image}
              desc={slide.text}
              heading={slide.heading}
              active={index === currentIndex ? "active" : ""}
            ></FlipCircle>
          </div>
        ))}
      </div>

      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={index === currentIndex ? "active" : ""}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <div className="carousel-controls">
        <button
          className="carousel-control-prev"
          onClick={handlePrev}
          disabled={isTransitioning}
        >
          <FaChevronLeft />
        </button>
        <button
          className="carousel-control-next"
          onClick={handleNext}
          disabled={isTransitioning}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default FlipElement;
