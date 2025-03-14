import React from "react";
import "./HomePageIntro.css";
import Waves from "../common/dividers/Waves";

const HomePageIntro = (props) => {
  return (
    <div className="hero-image header-container container-fluid">
      <div className="container-fluid">
        <div className="row p-0">
          <div className="col-lg-6">
            <h1 className="header-font">
              The moment the thought of exploring yourself arises,
            </h1>
            <h1 className="header-font">
              it marks the first step towards your spiritual journey.
            </h1>
            <h1 className="header-font align-right">~AMMA</h1>
          </div>
        </div>
      </div>
      <Waves></Waves>
    </div>
  );
};

export default HomePageIntro;
{
  /*
  <header className="header-container">
      <picture>
        <source
          media="(min-width:960px)"
          srcSet="img/home-bg-2160.jpg"
        ></source>
        <source media="(min-width:300px)" srcSet="img/home-bg-480.jpg"></source>
        <img
          className="card-img img-fluid"
          src="img/home-bg-2160.jpg"
          alt="home page intro"
        ></img>
      </picture>
      <Waves></Waves>
    </header> */
}
