import React from "react";
import Button from "../common/button/Button";
import { withBase } from "../utils/withBase";
import "./AshramContent.css";
function AshramContent(props) {
  const goToAshramPage = (goToAshramPage) => {
    window.location.href = withBase("/ashram");
  };
  return (
    <article className="container-fluid m-0 p-0">
      <div className="row row-background-green ashram-content">
        <div className="col-md-6">
          <img
            src="img/meditationhall3.jpg"
            className="frame designer-frame-ellipse"
          />
        </div>

        <div className="col-12 col-md-6">
          <h3 className="header  text-center">Ashram</h3>
          <hr className="divider" />
          <p className="text  mini-text">
            Our Ashram is located in India - hyderabad. The Ashram is a sanctum
            sacnctuary for the sadaks. Every Sunday we meet in Ashram for
            meditation. This is a very powerful energy space where the mind
            becomes still once we step into the Ashram…
          </p>
          <div className="col align-items-center justify-content-center  d-flex  ">
            <Button btnName="Know More" buttonclicked={goToAshramPage}></Button>
          </div>
        </div>
      </div>
    </article>
  );
}
export default AshramContent;
