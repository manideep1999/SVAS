import React from "react";
import Page from "../page/Page";
import PageBanner from "../page/PageBanner";
import "./OurMaster.css";

class OurMaster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="section">
        <div class="card w-100">
          <img
            class="card-img img-fluid"
            src="../img/Amma_banner.jpeg"
            alt="Card image"
          />
        </div>
        <article className="container ">
          <h3 align="center" className="header textcolor">
            <u> Sadhguru Sri Sri Sri Vani Matha </u>
          </h3>
          <h2 align="center" className="header textcolor">
            Our Divine Mother
          </h2>
          <p className="text textcolor">
            Behind this universe, there is a divine force that is the source of
            everything that exists. Every human being is a reflection of that
            eternity, holding that infinity hidden in them to be uncovered,
            experienced, and realized . A Sadhguru is one who has experienced
            and realized this ultimate reality- the absolute truth. The one who
            has not only experienced it but lives in communion with that
            absolute truth- the eternal divinity - so that they themselves
            become the truth, that divinity, and then come to show us the path
            to the truth. The real marvel is when that divinity takes on the
            form of a mother to guide us on this highest path of truth and that
            marvel is Sadguru Sri Sri Sri Vani Matha whom we dearly call Amma -
            Our Divine Mother.
          </p>
        </article>
        {/* amma the light of new befginning */}
        <article className="container">
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
                “One should always observe oneself, their actions, their
                thoughts, everything.”
              </i>{" "}
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
        </article>
        {/* amma and the satsang */}

        <article className="container">
          <div className="row">
            <h2 className="header textcolor">
              <u>Amma and the Satsang - Oneness in manyness</u>
            </h2>
            <div className="col-md-6">
              <div className="col-12 m-5">
                <img
                  src="img/masterpics/satsang2.jpg"
                  alt="satsang 1"
                  className="img-fit-contain"
                ></img>
              </div>
              <div className="col-12 m-5">
                <img
                  src="img/masterpics/satsang1.jpg"
                  alt="satsang2"
                  className="img-fit-contain"
                ></img>
              </div>
            </div>

            <div className="col-md-6">
              <p className="text textcolor" align="center">
                Sri Sai Vani Satsang is a spiritual seva ashram that was
                established by Amma in the year 1999 to bring the common people
                who are solely immersed in worldly life to walk on the forgotten
                spiritual path. Every Thursday evening the disciples would
                gather at Gurusthan to listen to Amma’s discourses. As the
                flowing river roundens the rough boulders on its way, such is
                the force of the divine discourses of Amma which crushes the ego
                which are rough edges in human nature. The flow of jnana from
                the discourse enters into the disciple and does its work. Amma
                teaches many complex yogic processes in a novel way. To all the
                sadaks, Satsang is a blessing where all of us get an opportunity
                to be in the presence of Amma to imbibe the divine knowledge to
                experience the unknown facets of spirituality within. It is an
                opportunity to receive divine energy with the mere speech and
                glance of Amma which clears the huddles in material life as well
                as spiritual life. Amma always accepts us- the disciples - as we
                are and teaches us to have that unity irrespective of the
                diverse natures we have, stressing that oneness in manyness. The
                string that binds us all together is the Love of Amma.
              </p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default OurMaster;
