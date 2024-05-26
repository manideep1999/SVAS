import React from "react";
import "./SectionSubHeader.css";
function SectionSubHeader(props) {
  return (
    <div className="row section-row">
      <h2 className="mx-auto heading-text data-heading sub-heading">
        {props.heading}
      </h2>
    </div>
  );
}
export default SectionSubHeader;
