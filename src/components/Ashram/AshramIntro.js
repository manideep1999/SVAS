import React from "react";
import "./AshramIntro.css";

import PageHeader from "../common/section/PageHeader";
import Curve from "../common/dividers/Curve";

function AshramIntro() {
  return (
    <div class="banner">
      <div class="banner-title banner-font">
        <span>
          <h1 className="banner-font threeD-text-shadow">ASRAMAM</h1>
        </span>
      </div>
      <img
        class="banner-image"
        src="img/ashram/ashram-meditation-hall.jpg"
        alt="Meditation hall "
      />
    </div>
  );
}
export default AshramIntro;
