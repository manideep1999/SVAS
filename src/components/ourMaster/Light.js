import React from "react";

function Light() {
  return (
    <section className="light-container">
      {/** Heading */}
      <article className="container ">
        <div className="row mx-auto master-section-row">
          <h3 className="header  paintbrush-heading">Amma</h3>
          <h3 className="header  paintbrush-heading">
            The Light of a New Beginning
          </h3>
        </div>
        {/** down sectino with image and text */}
        <div className="row mx-auto content-center-align master-section-row">
          <div className="col-lg-6">
            <img
              src="img/masterpics/lightcandle.jpg"
              alt="Amma lighting a lamp "
              className="fixed-image"
            ></img>
          </div>

          <div className="col-lg-5 offset-lg-1">
            <div>
              <p
                className="data-text space-text highlight-first-letter "
                align="left"
              >
                {" "}
                Amma’s teachings are very distinguished owing to their
                simplicity, yet unique and very powerful. These invaluable
                teachings show the path of righteous living and lead a way to
                grow from the basic human instinct to human nature and then
                towards humanity and finally to rise above humanity to the state
                of divinity. On the path of spirituality, one should be cautious
                every moment as anyone can slip down at any point if they
                surrender themselves to any of the worldly qualities. That is
                why, Amma lays more emphasis on introspection.
              </p>
            </div>
          </div>
        </div>
        <div className="row content-center-align">
          <div className="col master-custom-quote ">
            <strong>
              “One should always observe oneself, their actions, their thoughts,
              everything...”
            </strong>
          </div>
        </div>
        <div className="row mx-auto content-center-align">
          <div className="col-lg-5 offset-md-1">
            <p className="data-text space-text">
              This is the renewed direction in spirituality that Amma guides us.
              Amma gives complete freedom to the disciples at the same time
              instills how to sensibly use the freedom, upholding the
              responsibility that comes along with it. By walking on this path,
              life itself becomes the sadhana. There will be no two entities
              called spiritual and material life. It may appear so for the outer
              world or even for us but there will be only one that is spiritual
              life. Observing oneself on this path throughout the spiritual
              journey remains pivotal.
            </p>
          </div>
          <div className="col-lg-6 ">
            <img
              src="img/masterpics/blessing.jpg"
              alt="candle light"
              className="img-fit-contain"
            ></img>
          </div>
        </div>
      </article>
    </section>
  );
}
export default Light;

/*


 <br></br>
                <strong>
                  {" "}
                  “One should always observe oneself, their actions, their
                  thoughts, everything.”
                </strong>{" "}
                <br></br>
                This is the renewed direction in spirituality that Amma guides
                us. Amma gives complete freedom to the disciples at the same
                time instills how to sensibly use the freedom, upholding the
                responsibility that comes along with it. By walking on this
                path, life itself becomes the sadhana. There will be no two
                entities called spiritual and material life. It may appear so
                for the outer world or even for us but there will be only one
                that is spiritual life. Observing oneself on this path
                throughout the spiritual journey remains pivotal.
<div className="col">
 <img
                src="img/masterpics/blessing.jpg"
                alt="candle light"
                className="img-fit-contain"
              ></img>
              <img
                src="img/masterpics/blessing.jpg"
                alt="candle light"
                className="img-fit-contain"
              ></img>
            </div>
*/
