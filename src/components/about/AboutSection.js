import React from "react";
function AboutSection() {
  return (
    <div className="container about-container container-spacing ">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <p className="highlight-first-letter data-text">
            We are <b>SVAS</b>- Sri Vani Amma Sansthan - a volunteer based non
            profitable spiritual society. Our beloved mother Sadguru Sri Sri Sri
            Vani Matha is the focal point of our SVAS whom we dearly call Amma.
            SVAS is a group of people blessed by our beloved Amma with a path of
            a profound spiritual journey to attain the ultimate goal of human
            life - the completeness. Our society is rooted in the teachings of
            our esteemed spiritual master, Amma, who leads us through the
            essential and elevated principles of spirituality.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 offset-lg-3 ">
          <img src="img/about/3.jpg" className="image-fluid image"></img>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 offset-lg-2 data-text">
          <h2>Our Principles And Aims</h2>
          <ul>
            <li>
              The prime objective of SVAS is to keep the chain of awareness
              going, spread the nectar that we disciples have enjoyed from Amma
              to others. It’s an effort and a movement to make the lives full of
              love and happiness, for ourselves, the people around us and the
              future generations.
            </li>
            <li>
              Spiritual camps and meditation programs to unveil the magnificent
              yogic practices bestowed by Our Master Sadguru Sri Sri Sri Vani
              Matha
            </li>
            <li>
              To pursue the path of life journeying towards the inner self while
              performing the worldly duties.
            </li>
            <li>
              To assimilate the teachings of Amma , apply them to our lives and
              broaden our horizons.
            </li>
            <li>
              To be able to lead life in a righteous way with fearlessness and
              peace and be in unison with nature to become the breath of life,
              to become the SVAS.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default AboutSection;
