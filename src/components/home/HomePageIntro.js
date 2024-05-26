import React from "react";
import "./HomePageIntro.css";

const HomePageIntro = (props) => {
  return (
    <header>
      <picture>
        <source
          media="(min-width:960px)"
          srcset="../img/home-bg-2160.jpg"
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
    </header>
  );
};

export default HomePageIntro;
