import React from "react";
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
      <div className="master-main-container">
        <MasterIntro></MasterIntro>
        <div>
          <Light></Light>
          <Satsang></Satsang>
        </div>
        <MahaChaitanyaKriya></MahaChaitanyaKriya>
      </div>
    );
  }
}

export default OurMaster;
