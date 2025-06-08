import React from "react";
import "./Satsang.css";

function Satsang() {
  return (
    <section className="satsang-container">
      <article className="container">
        {/* Heading */}
        <div className="row">
          <h3 align="center" className="paintbrush-heading">
            Amma & The Satsang
          </h3>
          <h3 align="center" className="paintbrush-heading">
            Oneness in Manyness
          </h3>
        </div>

        <div className="row content-center-align custom-spacing">
          <div className="col-lg-6">
            <div className="col custom-spacing">
              <img
                src="img/masterpics/satsang4.jpg"
                alt="disciples praying "
                className="img-fit-contain "
              ></img>
            </div>
            <div className="col custom-spacing">
              <img
                src="img/masterpics/disciples.jpg"
                alt="Amma looking at disciples"
                className="img-fit-contain"
              ></img>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <p className="highlight-first-letter">
              Sri Sai Vani Satsang is a spiritual seva ashram that was
              established by Amma in the year 1999 to bring the common people
              who are solely immersed in worldly life to walk on the forgotten
              spiritual path. Every Thursday evening the disciples would gather
              at Gurusthan to listen to Amma’s discourses. As the flowing river
              roundens the rough boulders on its way, such is the force of the
              divine discourses of Amma which crushes the ego which are rough
              edges in human nature. The flow of jnana from the discourse enters
              into the disciple and does its work. Amma teaches many complex
              yogic processes in a novel way. To all the sadaks, Satsang is a
              blessing where all of us get an opportunity to be in the presence
              of Amma to imbibe the divine knowledge to experience the unknown
              facets of spirituality within. It is an opportunity to receive
              divine energy with the mere speech and glance of Amma which clears
              the huddles in material life as well as spiritual life. Amma
              always accepts us- the disciples - as we are and teaches us to
              have that unity irrespective of the diverse natures we have,
              stressing that oneness in manyness. The string that binds us all
              together is the Love of Amma.
            </p>
          </div>
        </div>

        {/* image grid */}
        <div className="row ">
          <div className="col-lg-4 custom-spacing">
            <img
              src="img/masterpics/satsang1.jpg"
              alt="disciples praying "
              className="img-fit-contain"
            ></img>
          </div>
          <div className="col-lg-4 custom-spacing">
            <img
              src="img/masterpics/welcome.jpg"
              alt="Amma blessing"
              className="img-fit-contain"
            ></img>
          </div>
          <div className="col-lg-4 custom-spacing">
            <img
              src="img/masterpics/with-disciple.jpg"
              alt="Amma blessing"
              className="img-fit-contain"
            ></img>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 offset-md-1 text-start"></div>
        </div>
      </article>
    </section>
  );
}
export default Satsang;
