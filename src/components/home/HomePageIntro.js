import React from "react";
import "./HomePageIntro.css";
import Waves from "../common/dividers/Waves";

const HomePageIntro = (props) => {
  return (
    <header className="header-container">
      <picture>
        <source
          media="(min-width:960px)"
          srcSet="img/home-bg-2160.jpg"
        ></source>
        <source media="(min-width:300px)" srcSet="img/home-bg-480.jpg"></source>
        <img
          className="card-img img-fluid"
          src="img/home-bg-2160.jpg"
          alt="home page intro"
        ></img>
      </picture>
      <Waves></Waves>
    </header>
  );
};

export default HomePageIntro;
