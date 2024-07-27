import React from "react";
import "./HomePageIntro.css";
import Waves from "../common/dividers/curve/Waves";

const HomePageIntro = (props) => {
  return (
    <header className="header-container">
      <picture>
        <source
          media="(min-width:960px)"
          srcset="../img/home-bg-480.jpg"
        ></source>
        <source
          media="(min-width:480px)"
          srcset="../img/home-bg-480.jpg"
        ></source>

        <img
          className="card-img img-fluid img-positon"
          src="../img/home-bg-480.jpg"
          alt="Card image"
        ></img>
      </picture>
      <Waves></Waves>
    </header>
  );
};

export default HomePageIntro;
