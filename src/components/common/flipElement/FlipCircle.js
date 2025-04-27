import React from "react";
import "./FlipCircle.css";

function FlipCircle(props) {
  return (
    <div className={`col circle ${props.active === "active" ? "active" : ""}`}>
      <div className="square-content align-self-center ">
        <h2 className="square-content-header">{props.heading}</h2>
        <div className="image-box custom-scrollbar">
          <img
            className="square-content-img img-fit"
            src={props.imageUrl}
            alt="flower"
          />

          <p className="square-content-text overlay centered">{props.desc}</p>
        </div>
      </div>
    </div>
  );
}
export default FlipCircle;
