import React from "react";

function Light() {
  return (
    <article className="container ">
      <div className="row">
        <h2 className="header textcolor">
          <u>Amma - the light of a new beginning</u>
        </h2>
        <div className="col-md-6">
          <img
            src="img/masterpics/lightcandle.jpg"
            alt="candle light"
            className="img-fit-contain"
          ></img>
        </div>

        <div className="col-md-6">
          <p className="text textcolor" align="center">
            Amma’s teachings are very distinguished owing to their simplicity,
            yet unique and very powerful. These invaluable teachings show the
            path of righteous living and lead a way to grow from the basic human
            instinct to human nature and then towards humanity and finally to
            rise above humanity to the state of divinity. On the path of
            spirituality, one should be cautious every moment as anyone can slip
            down at any point if they surrender themselves to any of the worldly
            qualities. That is why, Amma lays more emphasis on introspection.
          </p>
          <div className="col">
            <img
              src="img/masterpics/blessing.jpg"
              alt="candle light"
              className="img-fit-contain"
            ></img>
          </div>
        </div>
      </div>
      <div class="row">
        <p className="text textcolor">
          <i>
            {" "}
            “One should always observe oneself, their actions, their thoughts,
            everything.”
          </i>{" "}
          This is the renewed direction in spirituality that Amma guides us.
          Amma gives complete freedom to the disciples at the same time instills
          how to sensibly use the freedom, upholding the responsibility that
          comes along with it. By walking on this path, life itself becomes the
          sadhana. There will be no two entities called spiritual and material
          life. It may appear so for the outer world or even for us but there
          will be only one that is spiritual life. Observing oneself on this
          path throughout the spiritual journey remains pivotal.
        </p>
      </div>
    </article>
  );
}
export default Light;
