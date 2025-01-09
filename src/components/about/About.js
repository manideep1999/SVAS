import React from "react";
import "./About.css";
import SectionHeader from "../common/section/SectionHeader";
import AboutSection from "./AboutSection";

function About() {
  return (
    <section class="section">
      <SectionHeader
        imageUrl="./img/about/about-banner1.png"
        headerText="About Us"
        alt="About Banner"
      ></SectionHeader>
      <AboutSection></AboutSection>
    </section>
  );
}
export default About;
