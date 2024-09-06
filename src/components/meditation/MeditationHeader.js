import React from "react";
import "./MeditationHeader.css";

function MeditationHeader() {
  return (
    <>
      <section className="card  w-100">
        <div className="row p-0 m-0 meditation-banner no-gutters ">
          <div className="col-md-6 d-flex align-items-center justify-content-start">
            <div className="card-body">
              <h1 className="card-title header-text threeD-text-shadow">
                MEDITATION
              </h1>
            </div>
          </div>
          <div className="col-md-6 image-column d-flex align-items-start justify-content-end">
            <source
              media="(min-width:768px)"
              srcset="img/meditation/mediating-hands-landscape.png"
            ></source>
            <source
              media="(max-width:768px)"
              srcset="img/home-bg-480.jpg"
            ></source>
            <img
              className="card-img img-fluid img-fit meditation-img-border"
              src="img/meditation/mediating-hands-landscape.png"
              alt="Meditating hands in dyaana mudra"
            ></img>
          </div>
        </div>
      </section>
      <section className="container meditation-intro-div">
        <span className="header paintbrush-heading meditation-intro-text">
          <p>
            “It is meditation that opens your inner doors and introduces you to
            your true self within.“
            <span className="float-right">~ Amma</span>
          </p>
        </span>
      </section>
    </>
  );
}
export default MeditationHeader;
