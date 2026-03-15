import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollRestoration = () => {
  const location = useLocation();
  const navigationType = useNavigationType(); // "POP", "PUSH", "REPLACE"

  useEffect(() => {
    if (navigationType === "PUSH" || navigationType === "REPLACE") {
      // New page navigation → scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
    // "POP" means back/forward → leave scroll as-is
  }, [location, navigationType]);

  return null;
};

export default ScrollRestoration;
