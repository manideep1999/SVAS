import React from "react";
import HomePageSlider from "./HomePageSlider";
import HomePageIntro from "./HomePageIntro";
import HomePageText from "./HomePageText";
import HomePageContent from "./HomePageContent";
import HomePageMeetingTimes from "./HomePageMeetingTimes";
import "./HomePage.css";
import HomePagePrimer from "./HomePagePrimer";
import Waves from "../common/dividers/curve/Waves";
import FlipCircle from "../common/flipElement/FlipCircle";
import FlipElement from "../common/flipElement/FlipElement";

function HomePage(props) {
  return (
    <div className="home-page">
      <HomePageIntro />
      <HomePagePrimer />
      <FlipElement></FlipElement>
      <HomePageContent />
      <HomePageSlider />
      <HomePageMeetingTimes />
    </div>
  );
}
export default HomePage;
