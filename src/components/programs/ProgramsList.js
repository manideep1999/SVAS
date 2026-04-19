import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Programs.css";
import "./ProgramsList.css";
import Section from "../common/section/Section";

function ProgramsList() {
  const location = useLocation();

  // Scroll to the section when page loads or URL changes
  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        const yOffset = -50; // height of fixed header
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);
  const articles = [
    {
      id: "ashramSatsang",
      fallbackSrc: "./img/meditationhall.jpg",
      portraitSrc: "./img/programs/ashram-hall-900_1200.jpg",
      landscapeSrc: "./img/programs/ashram-hall-1200_900.jpeg",
      alt: "Meditation hall in Ashram",
      desc: "Every Sunday, ashram satsang is held, where sadaks come together to recharge and begin the week in a spirit of reflection and inner stillness. The sadaks contemplate on the teachings of Amma, meditate on them to experience the deep meditation levels in the energy space. After meditation, Satsangis spend  their time  working in the ashram's lush green  space. The day unfolds in a calm, serene, and powerful atmosphere, offering an opportunity to receive Amma’s divine blessings and start the week with renewed clarity and peace.",
      sectionHeading: "Ashram Satsang",
      btnInfo: "For more information:",
      btnText: "Contact Us",
      btnLink: "/contact#contactForm",
    },
    {
      id: "madhavaseva",
      fallbackSrc: "./img/programs/seva-children.jpeg",
      sectionHeading: "Madhava Seva",
      desc: "Madhavaseva is a food donation program organized under the SSVF (Sri Sai Vani Foundation), carried out every Sunday with Amma’s blessings and a heart full of love. Volunteers cook and pack food themselves and distribute it to needy people in government hospitals, many of whom travel long distances from underprivileged backgrounds. The SSVF volunteers personally hand over food packets to those in need. In this way, the spirit of selfless service is upheld, truly reflecting the saying, “Service to Man is Service to God.”",

      btnInfo: "For more information:",
      btnText: "Contact Us",
      alt: "children packing food for madhavaseva",
      btnLink: "/contact#contactForm",
      backgroundCol: "blue-gradient",
    },
  ];

  const sections = articles.map((article) => {
    console.log(article.btnText);
    return (
      <>
        <Section id={article.id} key={article.id} {...article}></Section>
      </>
    );
  });
  return sections;
}
export default ProgramsList;
