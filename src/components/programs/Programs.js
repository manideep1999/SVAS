import React from "react";
import "./Programs.css";
import Section from "../common/section/Section";
import SectionHeader from "../common/section/SectionHeader";
import ProgramsList from "./ProgramsList";
import VirtualProgramsList from "./VirtualProgramsList";
import SectionSubHeader from "../common/section/SectionSubHeader";

function Programs() {
  return (
    <div class="section">
      <SectionHeader
        imageUrl="../img/subTitleBanner.jpg "
        headerText="Programs"
      ></SectionHeader>

      <div className="container-fluid">
        <ProgramsList></ProgramsList>
        <SectionSubHeader heading="Virtual Programs"></SectionSubHeader>
        <VirtualProgramsList></VirtualProgramsList>
      </div>
    </div>
  );
}
export default Programs;
