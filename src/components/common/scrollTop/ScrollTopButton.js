import React, { useState, useEffect } from "react";
import { FaAngleUp, FaCaretUp } from "react-icons/fa6";

function ScrollTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      style={{
        position: "absolute",
        bottom: "0",
        right: "0",
        cursor: "pointer",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "24px",
          color: "#fff",
          backgroundColor: "#808080",
          borderRadius: "50%",
          padding: "12px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
          transition: "all 0.3s ease",
        }}
      >
        <FaAngleUp />
      </div>
      <div
        style={{
          fontSize: "18px",
          color: "#000",
          marginTop: "5px",
          fontWeight: "bold",
        }}
      >
        Top
      </div>
    </div>
  );
}

export default ScrollTopButton;
