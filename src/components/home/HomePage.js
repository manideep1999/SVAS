import React from "react";
import HomePageSlider from "./HomePageSlider";
import HomePageIntro from "./HomePageIntro";
import HomePageText from "./HomePageText";
import HomePageContent from "./HomePageContent";
import HomePageMeetingTimes from "./HomePageMeetingTimes";
import "./HomePage.css";
import HomePagePrimer from "./HomePagePrimer";

function HomePage(props) {
  return (
    <div className="home-page">
      <HomePageIntro />
      <HomePagePrimer />
      <HomePageContent />
      <HomePageSlider />
      <HomePageMeetingTimes />
    </div>
  );
}
export default HomePage;
