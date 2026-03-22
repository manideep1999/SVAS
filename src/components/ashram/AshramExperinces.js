import React from "react";
import FlipPages from "../common/flipPages/FlipPages";

const pages = [
  {
    image: "./img/ashram/bojanasala2.jpeg?1",
    title: "Asramam Experiences",
  },
  {
    title: "ASRAMAM",
    desc: "A Separate Dimension for Sadhana",
  },
  {
    image: "./img/ashram/gurustan.jpeg?3",
    desc: "Whenever I enter the ashram I feel as if some jammer has been put  on the mind.",
  },
  {
    image: "./img/ashram/gurustan.jpeg?4",
    desc:
      "I forget all worries and tensions and feel peaceful in the ashram" +
      "and it stays with me for the whole week.",
  },
  {
    image: "./img/ashram/Hall2.jpeg?5",
    desc: "It is a different world altogether.",
  },
  {
    image: "./img/ashram/Hall2.jpeg?6",
    desc: "Those are a few of the experiences!!!.",
  },
];
function AshramExperiences() {
  return (
    <div className="asram-row-container">
      <FlipPages pages={pages} />
    </div>
  );
}
export default AshramExperiences;
