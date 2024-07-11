import React from "react";
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

  return (
    <>
      <article className="container-fluid master-content p-0 master-section">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-4 p-0">
            <img
              src="img/masterpics/lighthouse.jpg"
              alt="Your Image"
              className="image img-fit"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <h3 className="header gradient-text">OUR MASTER</h3>
            <hr className="divider" />

            <p className="text ">
              A Sadhguru is the one who has experienced and realized the
              ultimate truth. The one who has just not experienced it but lives
              in communion with that absolute truth- the eternal divinity, such
              that they themselves become the truth, they become that divinity,
              and then comes to show us the path to the truth. The real marvel
              is when that divinity taks on the form of a mother to guide us on
              this highest path of truth and that marvel is Sadguru Sri Sri Sri
              Vani Matha whom we dearly call as Amma - The Divine Mother.
            </p>
            <div className="col align-items-center justify-content-center  d-flex  ">
              <Button
                btnName="Know More"
                buttonclicked={goToMasterPage}
              ></Button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 p-0">
            <img
              src="img/masterpics/master1.jpg"
              alt="Your Image"
              className="image img-fit"
            />
          </div>
        </div>
      </article>
      {/*Meditation section */}
      <article className="container row px-0 my-6 meditation-section">
        <div className="col-12 col-md-6">
          <h3 className="header textcolor text-center">Meditation</h3>
          <hr className="divider" />

          <p className="text textcolor">
            <b>
              <i>
                “It is meditation that opens your inner doors and introduces you
                to your true self within. “ ~Amma
              </i>
            </b>
            <br></br> In today's world Stress, disappointment , and despair has
            taken over human life. Noone is thinking of the consequences until
            they face them . People who really want to come out of these try to
            find a solution and the only solution they find is to search for
            oneself in true sense. Then the quest for finding “Myself” starts.
            And the key to this quest is dyaanam-meditation. Yes, Meditation is
            the only means to connect us with ourselves. But then the question “
            Where do I start?” arises.
          </p>
          <div className="col align-items-center justify-content-center  d-flex  ">
            <Button
              btnName="Know More"
              buttonclicked={goToMeditationPage}
            ></Button>
          </div>
        </div>
        <div className="col-12 col-md-6 p-0">
          <img
            src="img/meditation/whitelotus.png"
            alt="Your Image"
            className="img-fit"
          />
        </div>
      </article>
      <article className="content-wrapper">
        <div className="row ashram-content py-0">
          <div className="col-12 col-lg-6 px-0 oval-seperation">
            <img src="img/meditationhall3.jpg" className="img-fit" />
          </div>

          <div className="col-12 col-lg-6">
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
