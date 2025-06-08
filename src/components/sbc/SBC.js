import React from "react";
import { Outlet } from "react-router-dom";
import { BASENAME } from "../utils/constants";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "./SBC.css";
import "../../App.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ScrollToTop from "../common/scrollTop/ScrollToTop";

function SBC(props) {
  return (
    <div>
      <ScrollToTop />
      <Header basename={BASENAME} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default SBC;
