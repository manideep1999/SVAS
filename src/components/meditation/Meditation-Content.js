import React from "react";
import "./Meditation-Content.css";
import GoldenText from "../common/golden-text/GoldenText";

function MeditationContent() {
  return (
    <div className="main-container">
      <section className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="img/meditation/painting.jpg"
              className="img-fit"
              alt="masked painting"
            ></img>
          </div>
          <div className="col-md-5 offset-lg-1">
            <div className="space-item">
              <h2 className="heading-text">MEDITATION...</h2>
            </div>
            <div className="space-item">
              <p className="data-text small-header">
                What does it do? What this Magnificient tool does is much beyond
                our usually limited thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="meditation-container">
        <section className="container">
          <div className="row">
            <div className="col-md-6 ">
              <h2 className="heading-text move-down">
                What does Meditation do?
              </h2>
            </div>
            <div className="col-md-5 offset-lg-1 ">
              <div className="space-item">
                <h3 className="sub-header">An Excerpt from the discourse</h3>
                <p className="data-text space-text">
                  “Meditation gives you peace. It gives you tranquility, gives
                  you energy, gives you happiness, enhances your thinking, gives
                  clarity to your thoughts. Brings integrity into your life.
                  That integrity will become an indication of your success. If
                  you understand that integrity, it will help to know which way
                  is correct for you. It also helps to choose the way you need
                  to walk,it helps to filter your thoughts and choose the proper
                  ones which will lead you to the intended goal and become
                  successful. You ought to understand the fact that -It is
                  mediation that contributes to your success bringing out the
                  energy that is inherent and hidden within you, giving back
                  your true power that you have ignored and left helplessly
                  within you and it drives you forward every moment. This is
                  what meditation is. NOT JUST THIS..."
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="main-container">
        <section className="container">
          <div className="row mx-auto">
            <div className="col-md-6 ">
              <img
                src="img/meditation/sky.jpeg"
                className="img-fit"
                alt="masked painting"
              ></img>
            </div>
            <div className="col-lg-5 offset-lg-1 d-flex align-items-center">
              <div className="space-item">
                <h3 className="sub-header">Not Just This,</h3>
                <p className="data-text space-text">
                  “The mediation process expands beyond human nature to the
                  ​divine universal consciousness. It is the flow of such a
                  ​magnificent energy. In order to understand and experience
                  ​the flow of that great energy, everyone must surely meditate.
                  Only when you meditate, will you be able to understand the
                  ​depth of it. Only then you will be able to understand its
                  ​power. Only then will you be able to understand its
                  ​greatness.”"
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default MeditationContent;
