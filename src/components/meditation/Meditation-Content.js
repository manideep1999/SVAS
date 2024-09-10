import React from "react";
import "./Meditation-Content.css";
function MeditationContent() {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="col-md-6 ">
            <img
              src="img/meditation/painting.jpg"
              className="img-fit"
              alt="masked painting"
            ></img>
          </div>
          <div className="col-md-6 ">
            <div className="space-item">
              <h2 className="heading-text">MEDITATION...</h2>
            </div>
            <div className="space-item">
              <p className="data-text small-header">
                is not for relaxation. What this Magnificient tool does is much
                beyond our usually limited thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="heading-text move-down">What does Meditation do?</h2>
          </div>
          <div className="col-md-6">
            <div className="space-item">
              <h3 className="sub-header">An Excerpt from the discourse</h3>
              <p className="data-text space-text">
                “Meditation gives you peace. It gives you tranquility, gives you
                energy, gives you happiness, enhances your thinking, gives
                clarity to your thoughts. Brings integrity into your life. That
                integrity will become an indication of your success. If you
                understand that integrity, it will help to know which way is
                correct for you. It also helps to choose the way you need to
                walk,it helps to filter your thoughts and choose the proper ones
                which will lead you to the intended goal and become successful.
                You ought to understand the fact that -It is mediation that
                contributes to your success bringing out the energy that is
                inherent and hidden within you, giving back your true power that
                you have ignored and left helplessly within you and it drives
                you forward every moment. This is what meditation is...."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default MeditationContent;
