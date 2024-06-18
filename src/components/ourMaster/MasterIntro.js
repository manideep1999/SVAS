import React from "react";
import "./MasterIntro.css";

function MasterIntro() {
  return (
    <div className="section">
      <div className="card w-100">
        <img
          class="card-img img-fluid"
          src="../img/Amma_banner.jpeg"
          alt="Card image"
        />
        <h3 align="center" className="header card-heading textcolor">
          <u> Sadhguru Sri Sri Sri Vani Matha </u>
        </h3>
      </div>
      <article className="container border-black ">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <h2 align="center" className="mt-5 mb-4 header textcolor">
              Our Divine Mother
            </h2>
            <p className="text textcolor highlight-first-letter kolam-underline">
              Behind this universe, there is a divine force that is the source
              of everything that exists. Every human being is a reflection of
              that eternity, holding that infinity hidden in them to be
              uncovered, experienced, and realized . A Sadhguru is one who has
              experienced and realized this ultimate reality- the absolute
              truth. The one who has not only experienced it but lives in
              communion with that absolute truth- the eternal divinity - so that
              they themselves become the truth, that divinity, and then come to
              show us the path to the truth. The real marvel is when that
              divinity takes on the form of a mother to guide us on this highest
              path of truth and that marvel is Sadguru Sri Sri Sri Vani Matha
              whom we dearly call Amma - Our Divine Mother.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
export default MasterIntro;
