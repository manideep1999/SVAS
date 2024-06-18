import React from "react";
import Page from "../page/Page";
import PageBanner from "../page/PageBanner";
import "./OurMaster.css";
import MasterIntro from "./MasterIntro";
import Light from "./Light";
import Satsang from "./Satsang";
import MahaChaitanyaKriya from "./MahaChaitanyaKriya";

class OurMaster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MasterIntro></MasterIntro>
        <Light></Light>
        <Satsang></Satsang>
        <MahaChaitanyaKriya></MahaChaitanyaKriya>
      </div>
    );
  }
}

export default OurMaster;
