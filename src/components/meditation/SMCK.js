import React from "react";
import "./SMCK.css";
import AutoPlayVideo from "../common/autoplayvideo/AutoPlayVideo";
import GoldenText from "../common/golden-text/GoldenText";
import BlobWithImage from "../common/blob/BlobWithImage";
function SMCK() {
  const medblobs = [
    {
      colorClass: "blob-radiantblue",
      imageurl: "./img/smck/sunrise.png",
      text: "A Dyaana Sadana \nTo expereince and value human life.",
      topvalue: "top100",
    },

    {
      colorClass: "blob-radiantblue",
      imageurl: "./img/smck/tree.png",
      text: "A Dyaana Sadana \nTo rise from where you stand",
      topvalue: "top100",
    },
    {
      colorClass: "blob-radiantblue",
      imageurl: "./img/smck/butterflies.png",
      text: "A Dyaana Sadana \nTo expand our horizons to the Universalness.",
      topvalue: "top50",
    },
  ];

  return (
    <div>
      <div className="container-fluid blue-gradient-background">
        <div className="row">
          <div className="col pt-10 d-flex  align-items-center justify-content-center">
            <AutoPlayVideo videoSrc="video/lotus-bloom.mp4" />
          </div>
        </div>
        <div className="row  justify-content-center">
          <div className="col-lg-8">
            <p>
              To experience that completeness and wholeness of Meditation and to
              lead a fulfilled life Amma devised a unique powerful Dyaana Sadana
              - Sri MahaChaitanya Kriya. In this modern and most advanced age of
              technology and AI we humans are in a way knowingly or unknowingly
              diminishing or limiting our otherwise limitless intelligence. Sri
              MahaChaitanya Kriya is a one of a kind yogic practice(yoga
              sadhana) to awaken those inner faculties and expand them to their
              inherit universalness...
            </p>
          </div>
        </div>
      </div>

      <section className="container">
        <h2 className="d-flex  align-items-center justify-content-center heading-text">
          Sri MahaChaitanya Kriya
        </h2>
        <div className="circular-image-container">
          <div className="row justify-content-center">
            {medblobs.map((medblob, index) => (
              <div
                key={index}
                className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center"
              >
                <BlobWithImage
                  imageurl={medblob.imageurl}
                  text={medblob.text}
                  colorClass={medblob.colorClass}
                  topvalue={medblob.topvalue}
                ></BlobWithImage>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default SMCK;
