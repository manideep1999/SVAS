import React from "react";
import HomePageSlider from "./HomePageSlider";
import HomePageIntro from "./HomePageIntro";
import HomePageText from "./HomePageText";
import HomePageContent from "./HomePageContent";
import HomePageMeetingTimes from "./HomePageMeetingTimes";
import "./HomePage.css";

function HomePage(props) {
  return (
    <div className="home-page">
      <HomePageIntro />
      <HomePageText />
      <HomePageContent />
      <HomePageSlider />
      <HomePageMeetingTimes />
    </div>
  );
}
export default HomePage;
