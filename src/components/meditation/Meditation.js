import React from "react";
import "./Meditation.css";
import MeditationHeader from "./MeditationHeader";
import MeditationContent from "./Meditation-Content";
import GoldenText from "../common/golden-text/GoldenText";
import SMCK from "./SMCK";
function Meditation() {
  return (
    <>
      <MeditationHeader></MeditationHeader>
      <MeditationContent></MeditationContent>
      <SMCK></SMCK>
    </>
  );
}
export default Meditation;
