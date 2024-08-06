import React from "react";
import "./AshramContent.css";

function AshramContent() {
  return (
    <>
      <article className="container">
        <div className="row">
          <div class="col-lg-8 offset-lg-2">
            <p className="text textcolor highlight-first-letter">
              <span>
                Our Ashram is situated near hyderabad,India,nestled away from
                the busy urban life in the midst of serene village surrounding.
                The Ashram is a sanctum sanctuary for the sadaks. This is a very
                profoundly energized space imbued with divine energy . Our Sri
                Guru Sadguru Sri Vani Matha has transformed this space into an
                energy space conducive to those who want to step into
                spirituality. Those already on their spiritual journey will see
                their sadana deppening. A common experience upon entering the
                Ahrams is a remarkable stillness of mind. All your worries and
                mental noise just fade away, leaving you in a state of
                tranquility.
              </span>
            </p>
          </div>
        </div>
      </article>
      <article className="container">
        <div class="row asram-container">
          <div class="col-lg-4 d-flex justify-content-start align-items-start">
            <img
              src="./img/ashram/gate.jpeg"
              alt="ahramam entrance"
              class="corner-image"
            />
          </div>

          <div class="col-lg-4 d-flex justify-content-end align-items-start">
            <img
              src="./img/ashram/goshala.jpeg"
              alt="goshala in asramam"
              class="corner-image"
            />
          </div>
        </div>
        <div className="row ">
          <div class="col-lg-8  offset-lg-2 d-flex justify-content-center align-items-center text-center-box">
            <div>
              <p className="text textcolor">
                Every Sunday the sadaks meet in the ashram to meditate and be in
                silence and receive the divine energy and a peaceful mind and
                try to carry forward that for the whole week. The practices we
                do in Ashram will help us move forward in the daily practices we
                do at home. The lush green space and the silence encompasses the
                mind and it tries to remain in its true state of peace. Anyone
                can join us in the Ashram on Sundays and experience true joy.
              </p>
            </div>
          </div>
        </div>
        <div class="row asram-container">
          <div class="col-lg-4 d-flex justify-content-start align-items-end">
            <img
              src="./img/ashram/bojansala.jpeg"
              alt="bojansala"
              class="corner-image"
            />
          </div>

          <div class="col-lg-4 d-flex justify-content-end align-items-end">
            <img
              src="./img/ashram/hall.jpeg"
              alt="meditaion hall"
              class="corner-image"
            />
          </div>
        </div>
      </article>
    </>
  );
}
export default AshramContent;
