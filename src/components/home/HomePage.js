import React from "react";
import HomePageSlider from "./HomePageSlider";
import HomePageIntro from "./HomePageIntro";
import HomePageText from "./HomePageText";
import HomePageContent from "./HomePageContent";
import HomePageMeetingTimes from "./HomePageMeetingTimes";
import "./HomePage.css";
import HomePagePrimer from "./HomePagePrimer";
import Waves from "../common/dividers/Waves";
import FlipCircle from "../common/flipElement/FlipCircle";
import FlipElement from "../common/flipElement/FlipElement";
import CarouselWithImage from "../common/carousel-slider/carousel-with-image/CarouselWithImage";
import SVASPrayer from "./SVASPrayer";

function HomePage(props) {
  return (
    <div className="home-page">
      <HomePageIntro />
      <div className="sticky-div">
        <FlipElement />
      </div>
      <SVASPrayer />

      <HomePageContent />
      <HomePageSlider />
    </div>
  );
}
export default HomePage;
