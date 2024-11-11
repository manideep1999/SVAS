import React from "react";
import "./SMCK.css";
import AutoPlayVideo from "../common/autoplayvideo/AutoPlayVideo";
import GoldenText from "../common/golden-text/GoldenText";
function SMCK() {
  return (
    <div>
      <div className="meditation-container d-flex  align-items-center justify-content-center full-height-cotainer">
        <div className="row">
          <div className="col pt-10 d-flex  align-items-center justify-content-center">
            <AutoPlayVideo videoSrc="/video/blooming-lotus.mp4" />
          </div>
        </div>
      </div>

      <GoldenText></GoldenText>

      <div className="meditation-container">
        <section className="container">
          <div className="row">
            <div className="col-md-7">
              <img
                src="img/meditation/bird.jpg"
                className="img-fit image-border"
                alt="bird"
              ></img>
            </div>
            <div className="col-md-4 offset-md-1 ">
              <img
                src="img/meditation/white-flower-square.jpg"
                className="img-fit image-border curved-frame"
                alt="white flower"
              ></img>
            </div>
          </div>

          <div className="row">
            <div className="col space-item">
              <p className="data-text space-text">
                To experience that completeness and wholeness of Meditation and
                to lead a fulfilled life Amma devised a unique powerful Dyaana
                Sadana - SMCK. In this modern and most advanced age of
                technology and AI we humans are in a way knowingly or
                unknowingly diminishing or limiting our otherwise limitless
                intelligence. SMCK is a supreme tool to awaken those inner
                faculties that and expand them to their universalness...
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className=" full-height-cotainer">
        <h2 className="d-flex  align-items-center justify-content-center heading-text">
          Sri MahaChaitanya Kriya
        </h2>
        <div className="circular-image-container">
          <img
            className="circular-image"
            src="img/smck/flower.jpeg"
            alt="a yellow flower shining in the dark"
          />
          <p className="image-text"> To rise from where you stand </p>
        </div>
      </section>
    </div>
  );
}
export default SMCK;
