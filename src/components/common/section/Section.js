import React from "react";
import "./Section.css";

function Section(props) {
  return (
    <section className="row section-row">
      <div className="col-md-6">
        <div className="div-block">
          <picture className="content-block">
            {props.portraitSrc && (
              <source media="(max-width:767px)" srcSet={props.portraitSrc} />
            )}
            {props.landscapeSrc && (
              <source media="(min-width:768px)" srcSet={props.landscapeSrc} />
            )}
            <img
              src={props.fallbackSrc}
              alt={props.alt}
              className="img-fluid img-fit"
            ></img>
          </picture>
        </div>
      </div>
      <div className="col-md-6 section-data">
        <h3 className="mx-auto  heading-text data-heading">
          {props.sectionHeading}
        </h3>
        <p>{props.desc}</p>
        <span className="mr-3 info-font">
          <b>{props.timingInfo}</b>
        </span>
        <div
          className="mr-3 info-font"
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <b>
            <div dangerouslySetInnerHTML={{ __html: props.btnInfo }} />
          </b>
          <a
            className="btn  btn-outline-success button-style"
            role="button"
            href="#"
          >
            {props.btnText}
          </a>
        </div>
      </div>
    </section>
  );
}
export default Section;
