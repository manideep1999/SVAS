import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation(); // This hook gives the current location object

  useEffect(() => {
    // Scroll to top of the page every time the location changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]); // Dependency array with location ensures this runs whenever the route changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;
