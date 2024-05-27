import React from "react";
import HomePageSlider from "./HomePageSlider";
import HomePageIntro from "./HomePageIntro";
import HomePageText from "./HomePageText";
import HomePageContent from "./HomePageContent";
import HomePageMeetingTimes from "./HomePageMeetingTimes";
import "./HomePage.css";
import FlipCircle from "../common/flipElement/FlipCircle";

function HomePage(props) {
  return (
    <div className="home-page">
      <HomePageIntro />
      <FlipCircle />
      <HomePageContent />
      <HomePageSlider />
      <HomePageMeetingTimes />
    </div>
  );
}
export default HomePage;
