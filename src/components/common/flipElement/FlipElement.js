import React from "react";
import "./FlipElement.css";

function FlipElement() {
  return (
    <section className="container-fluid">
      <div className="row no-gutters">
        {/*<div className="col circle">
          <img src="./img/flipcard/lotus1.jpg" alt="flower" />
        </div>
        <div className="col circle">
          <img
            className="square-content-img"
            src="./img/flipcard/lotus1.jpg"
            alt="flower"
          />
        </div>
        <div className="col circle">
          <img
            className="square-content-img"
            src="./img/flipcard/lotus1.jpg"
            alt="flower"
          />
        </div>*/}
        <div className="col circle">
          <img
            className="rounded-img"
            src="./img/flipcard/lotus1.jpg"
            alt="flower"
          />
          <div className="col content">
            <h2 className="content-header">Sadana</h2>
            <p className="content-text">
              To attain the ultimate state in the journey of spiritual life one
              must do Sadhana. Sadhana means to conquer your mind and win over
              yourself. The first Sadhana you need to do is to coordinate your
              Manas(mind), Buddhi(intellect) Indriyas and Gnanendriyas(5 senses
              of perception). When your sadana takes you from this state of
              harmony between Manas, Buddhi, Indriyas and Gnanendriyas to the
              state of oneness , from the state of oneness to the state of
              divinity and then it becomes complete. To achieve that state, one
              has to work hard with self discipline (internal & external) in
              their spiritual practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FlipElement;
