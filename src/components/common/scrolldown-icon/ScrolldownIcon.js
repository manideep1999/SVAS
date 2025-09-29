import React from "react";
import { FaArrowDown } from "react-icons/fa";
import "./ScrolldownIcon.css";

function ScrolldownIcon() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-wrapper" onClick={handleScroll}>
      <FaArrowDown className="scroll-icon" />
      <span className="scroll-label">Scroll</span>
    </div>
  );
}

export default ScrolldownIcon;
