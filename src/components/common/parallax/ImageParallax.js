import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./ImageParallax.css";

function ImageParallax({ image }) {
  ImageParallax.propTypes = {
    image: PropTypes.string.isRequired,
  };
  useEffect(() => {
    const handleScroll = () => {
      const parallaxBackground = document.querySelector(".parallax-background");
      const scrollPosition = window.scrollY;
      parallaxBackground.style.transform = `translateY(${
        scrollPosition * 0.5
      }px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="parallax-container">
      <div className="parallax-background"></div>
      <div className="content">
        <h1>Parallax Effect</h1>
        <p>This is a simple parallax effect that works on mobile devices.</p>
      </div>
    </div>
  );
}

export default ImageParallax;
