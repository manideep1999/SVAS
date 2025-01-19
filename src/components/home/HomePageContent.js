import React, { useEffect, useRef, useState } from "react";
import "./HomePageContent.css";
import Button from "../common/button/Button";

const HomePageContent = (props) => {
  const goToMasterPage = (goToMasterPage) => {
    window.location.href = "/ourMaster";
  };
  const goToMeditationPage = (goToMeditationPage) => {
    window.location.href = "/meditation";
  };
  const goToAshramPage = (goToAshramPage) => {
    window.location.href = "/ashram";
  };
  const quote = [
    "Following the Path",
    "manifested by'GURU'",
    "makes the Spiritual Journey",
    "Delightful.",
  ];
  const meditationQuote = [
    "Mind which attains peace",
    "can only be happy",
    "in true sense.",
    "And only a happy mind",
    "can travel towards completeness.",
  ];

  return (
    <>
      <article className="container-fluid master-content p-0 master-section">
        <div className="row sticky-div row-background1 p-0 m-0 ">
          <div className="col-12 col-md-8 offset-md-2">
            <picture>
              <source
                media="(max-width: 799px)"
                srcset="img/masterpics/lighthouse-portrait.jpg"
              />
              <source
                media="(min-width: 800px)"
                srcset="img/masterpics/lighthouse-landscape.jpg"
              />
              <img
                src="img/masterpics/lighthouse-landscape.jpg"
                alt="lighthouse"
                className="image-fluid image"
              />
            </picture>
          </div>
        </div>

        <div className="row g-0 d-flex  text-scroll-effect">
          <div col-12>
            {quote.map((line) => (
              <div className="quote-container">
                <h2 className="header quote-text">
                  <span>{line}</span>
                </h2>
              </div>
            ))}
          </div>
        </div>

        <div className="row row-background">
          <div className="col-md-6  align-items-center text-scroll-effect">
            <h2 className="header gradient-text">
              <span>OUR GURU </span>
            </h2>

            <p className="text">
              <span>
                A Sadhguru is the one who has experienced and realized the
                ultimate truth. The one who has just not experienced it but
                lives in communion with that absolute truth- the eternal
                divinity, such that they themselves become the truth, they
                become that divinity, and then comes to show us the path to the
                truth. The real marvel is when that divinity taks on the form of
                a mother to guide us on this highest path of truth and that
                marvel is Sadguru Sri Sri Sri Vani Matha whom we dearly call as
                Amma - The Divine Mother.
              </span>
            </p>
            <div className="col align-items-center justify-content-center  d-flex">
              <Button
                btnName="Know More"
                buttonclicked={goToMasterPage}
              ></Button>
            </div>
          </div>
          <div className="col-md-6 ">
            <img
              src="img/masterpics/Master1-1360_x_1200.jpg"
              alt="Guru Image"
              className="frame designer-frame"
            />
          </div>
        </div>
      </article>
      {/*Meditation section */}

      {/* Sricky div and quote ends here */}
      <article className="container-fluid m-0 p-0 master-content">
        {/* Sricky div and quote here */}
        <div className="row sticky-div  row-background2 p-0 m-0 ">
          <div className="col-12">
            <div className="full-height">
              <picture>
                <source
                  media="(max-width: 799px)"
                  srcset="img/home/closed-eyes.jpg"
                />
                <source
                  media="(min-width: 800px)"
                  srcset="img/home/meditation-eyes.jpg"
                />
                <img
                  src="img/home/closed-eyes.jpg"
                  alt="meditaton-eyes"
                  className="image-fluid image"
                />
              </picture>
            </div>
          </div>
        </div>
        <div className="row g-0 d-flex  text-scroll-effect">
          <div col-12>
            {meditationQuote.map((line) => (
              <div className="quote-container">
                <h2 className="header quote-text">
                  <span>{line}</span>
                </h2>
              </div>
            ))}
          </div>
        </div>
        <div className="row  row-background-blue">
          <div className="col-md-6  align-items-center text-scroll-effect">
            <h2 className="header gradient-text">
              <span>Meditation</span>
            </h2>
            <p className="text">
              <span>
                In today's world Stress, disappointment , and despair has taken
                over human life. Noone is thinking of the consequences until
                they face them . People who really want to come out of these try
                to find a solution and the only solution they find is to search
                for oneself in true sense. Then the quest for finding “Myself”
                starts. And the key to this quest is dyaanam-meditation. Yes,
                Meditation is the only means to connect us with ourselves. But
                then the question “ Where do I start?” arises.
              </span>
            </p>
            <div className="col align-items-center justify-content-center  d-flex  ">
              <Button
                btnName="Know More"
                buttonclicked={goToMeditationPage}
              ></Button>
            </div>
          </div>

          <div className="col-md-6">
            <img
              src="img/meditation/whitelotus.png"
              alt="Your Image"
              className="frame designer-frame"
            />
          </div>
        </div>
      </article>
      <article className="container-fluid m-0 p-0">
        <div className="row ashram-content">
          <div className="col-md-6">
            <img
              src="img/meditationhall3.jpg"
              className="frame designer-frame"
            />
          </div>

          <div className="col-12 col-md-6">
            <h3 className="header  text-center">Ashram</h3>
            <hr className="divider" />
            <p className="text  mini-text">
              Our Ashram is located in India - hyderabad. The Ashram is a
              sanctum sacnctuary for the sadaks. This is a very powerful energy
              space where the mind becomes still once we step into the Ashram…
            </p>
            <div className="col align-items-center justify-content-center  d-flex  ">
              <Button
                btnName="Know More"
                buttonclicked={goToAshramPage}
              ></Button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default HomePageContent;
