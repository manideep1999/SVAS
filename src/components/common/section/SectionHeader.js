import React from "react";
import "./SectionHeader.css";
function SectionHeader(props) {
  return (
    <div class="card w-100">
      <img class="card-img img-fluid" src={props.imageUrl} alt={props.alt} />
      <div class="card-img-overlay d-flex">
        <h1 class="card-text  text-center align-self-center mx-auto text-light">
          {props.headerText}
        </h1>
      </div>
    </div>
  );
}
export default SectionHeader;
