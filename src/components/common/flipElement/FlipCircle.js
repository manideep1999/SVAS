import React from "react";
import { useEffect, useRef, useState } from "react";
import "./FlipCircle.css";

function FlipCircle(props) {
  // to show the scroll hint arrow at the cut off
  const boxRef = useRef(null);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;

    const checkScroll = () => {
      const isScrollable = el.scrollHeight > el.clientHeight;
      const isAtBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

      setShowHint(isScrollable && !isAtBottom);
    };

    checkScroll(); // initial check
    el.addEventListener("scroll", checkScroll);

    return () => el.removeEventListener("scroll", checkScroll);
  }, []);
  return (
    <div className={`col circle ${props.active === "active" ? "active" : ""}`}>
      <div className="square-content align-self-center ">
        <h2 className="square-content-header">{props.heading}</h2>
        <div className="image-box custom-scrollbar" ref={boxRef}>
          <img
            className="square-content-img img-fit"
            src={props.imageUrl}
            alt="flower"
          />

          <p className="square-content-text overlay centered">{props.desc}</p>
        </div>
      </div>
      {showHint && (
        <div className="scroll-arrow">
          {[...Array(3)].map((_, i) => (
            <span key={i}></span>
          ))}
        </div>
      )}
    </div>
  );
}
export default FlipCircle;
