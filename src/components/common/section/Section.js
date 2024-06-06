import React from "react";
import "./Section.css";

function Section(props) {
  return (
    <section className="row section-row">
      <div className="col-md-6">
        <div className="div-block">
          <span className="content-block">
            <img src={props.imageUrl} className="img-fluid img-fit"></img>
          </span>
        </div>
      </div>
      <div className="col-md-6 section-data">
        <h3 className="mx-auto  heading-text data-heading">
          {props.sectionHeading}
        </h3>
        <p>{props.desc}</p>
        <span class="mr-3 info-font">
          <b>{props.btnInfo} </b>
        </span>
        <a class="btn  btn-outline-info button-style" role="button" href="#">
          {props.btnText}
        </a>
      </div>
    </section>
  );
}
export default Section;
