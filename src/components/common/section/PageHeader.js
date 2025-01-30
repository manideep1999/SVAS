import React from "react";
import "./PageHeader.css";
import Curve from "../dividers/Curve";

function PageHeader(props) {
  return (
    <div className="card custom-card card-height w-100 ">
      <img
        className="card-img card-height img-fluid"
        src={props.imgUrl}
        alt={props.alt}
      />
      <h3
        align="center"
        className={`header card-heading textcolor ${props.titlebackground}`}
      >
        <u> {props.title} </u>
      </h3>
    </div>
  );
}
export default PageHeader;
