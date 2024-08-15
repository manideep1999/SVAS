import React from "react";
import "./Flipbook.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function Flipbook() {
  return (
    <section className="container book-container d-flex align-items-center justify-content-center">
      <input type="checkbox" className="page-button" id="next-page"></input>
      <div className="book">
        <div className="cover">
          <label for="next-page"></label>
        </div>
        <div className="page"></div>
        <div className="back-cover"></div>
      </div>
    </section>
  );
}
export default Flipbook;
