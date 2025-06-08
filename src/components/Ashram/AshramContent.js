import React from "react";
import "./AshramContent.css";

function AshramContent() {
  return (
    <>
      <article className="container-fluid ashram-container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-6 ">
            <p className="highlight-first-letter kolam-underline ">
              Our Ashram is situated near hyderabad,India,nestled away from the
              busy urban life in the midst of serene village surroundings. The
              Ashram is a sanctum sanctuary for the sadaks. This is a very
              profoundly energized space imbued with divine energy . Our Sri
              Guru Sadguru Sri Vani Matha has transformed this space into an
              energy space conducive to those who want to step into
              spirituality. Those already on their spiritual journey will see
              their sadana deppening. A common experience upon entering the
              Ahrams is a remarkable stillness of mind. All your worries and
              mental noise just fade away, leaving you in a state of
              tranquility.
            </p>
          </div>
        </div>
      </article>
      <article className="container-fluid ashram-image-container">
        <div className="row  justify-content-evenly">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <div className="image-frame ">
              <img
                src="./img/ashram/gate.jpeg"
                alt="Ahsram Gate resembling hands welcoming everyone with namaste"
                className="img-fluid grid-img"
              />
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="row">
              <div className="col-12">
                <img
                  src="./img/ashram/goshala.jpeg"
                  alt="Goshala image"
                  className="img-fluid grid-img"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <p>
                  Every Sunday the sadaks meet in the ashram to meditate and be
                  in silence and receive the divine energy and a peaceful mind
                  and try to carry forward that for the whole week. The
                  practices we do in Ashram will help us move forward in the
                  daily practices we do at home. The lush green space and the
                  silence encompasses the mind and it tries to remain in its
                  true state of peace. Anyone can join us in the Ashram on
                  Sundays and experience true joy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
export default AshramContent;
