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

  return (
    <>
      <article className="container-fluid master-content master-section">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-4">
            <img
              src="img/masterpics/lighthouse.jpg"
              alt="Your Image"
              className="image"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <h3 className="header">OUR MASTER</h3>
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
            <div className="inline flex-cc">
              <Button
                btnName="Know More"
                buttonclicked={goToMasterPage}
              ></Button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <img
              src="img/masterpics/master1.jpg"
              alt="Your Image"
              className="image"
            />
          </div>
        </div>
      </article>
      {/*Meditation section */}
      <article className="container row my-3 meditation-section">
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
          <div className="inline flex-cc">
            <Button
              btnName="Know More"
              buttonclicked={goToMeditationPage}
            ></Button>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img
            src="img/meditation/whitelotus.png"
            alt="Your Image"
            className="imageresize"
          />
        </div>
      </article>
    </>
  );
};

export default HomePageContent;
