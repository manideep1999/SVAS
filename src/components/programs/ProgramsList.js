import React from "react";
import "./Programs.css";
import Section from "../common/section/Section";

function ProgramsList() {
  const articles = [
    {
      imageUrl: "../img/meditationhall.jpg",
      desc: "Every Sunday, ashram satsang is held, where sadaks gather to recharge and meditate on the first day of the week. The sadaks reflect on the teachings of Amma , meditate on them to experience the deep meditation levels in the energy space. Satsangis spend  their time after meditation working in the ashram's lush green  space. The first day of the week is spent in the calm, serene and powerful energy space to receive the divine blessings of Amma.",
      sectionHeading: "Ashram Satsang",
      btnInfo: "For more information:",
      btnText: "Contact Us",
    },
    {
      imageUrl: "../img/seva-children.jpeg",
      sectionHeading: "Madhava Seva",
      desc:
        "Madhavaseva is the food donation program organized under the" +
        "With a heartful of love and AMMA’s blessings on every Sunday SSVF foundation - Sri Sai Vani Foundation. <br></br>" +
        "volunteers cook food and pack it themselves and distribute to the" +
        "needy people in Govt. hospitals where very poor people come from" +
        "long distances. SSVF volunteers distribute food packets to them" +
        "directly. Thus in this way he who loves others selflessly and" +
        "satisfies hunger really makes the saying, “Service to Man is" +
        "Service to God” true in its spirit." +
        'sectionHeading: "Madhava Seva",',
      btnInfo: "For more information:",
      btnText: "Contact Us",
    },
  ];

  const sections = articles.map((article) => {
    console.log(article.btnText);
    return (
      <>
        <Section {...article}></Section>
      </>
    );
  });
  return sections;
}
export default ProgramsList;
