import React from "react";
import "./SectionHeader.css";
function SectionHeader(props) {
  return (
    <div className="card w-100">
      <img
        className="card-img img-fluid"
        src={props.imageUrl}
        alt={props.alt}
      />
      <div className="card-img-overlay d-flex">
        <h1 className="card-text  text-center align-self-center mx-auto text-light  threeD-text-shadow">
          {props.headerText}
        </h1>
      </div>
    </div>
  );
}
export default SectionHeader;
