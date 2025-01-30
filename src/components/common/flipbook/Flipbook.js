import React from "react";
import "./Flipbook.css";

import { Fas, FaChevronLeft, FaChevronRight } from "react-icons/fa";
function Flipbook() {
  return (
    <section className="container book-container d-flex align-items-center justify-content-center">
      <input type="checkbox" className="page-button" id="next-page"></input>
      <input
        type="checkbox"
        className="page-button"
        id="checkbox-page1"
      ></input>
      <input
        type="checkbox"
        className="page-button"
        id="checkbox-page2"
      ></input>
      <input
        type="checkbox"
        className="page-button"
        id="checkbox-page3"
      ></input>
      <input
        type="checkbox"
        className="page-button"
        id="checkbox-page4"
      ></input>
      <input
        type="checkbox"
        className="page-button"
        id="checkbox-page5"
      ></input>
      <div className="book">
        <div className="cover">
          <div className="frontpage cover-page">
            <div className="text-section">
              <h2 className="booktitle">ASRAMAM EXPERIENCES</h2>
            </div>
            <div className="image-section">
              <img src="img/ashram/hall2.jpeg" />
            </div>
            <label htmlFor="next-page"></label>
          </div>
          <div className="backpage">
            <label htmlFor="next-page"></label>
          </div>
        </div>
        <div className="page" id="page1">
          <div className="frontpage flex-center">
            <p className="book-heading">
              ASHRAM<br></br> A Seperate Dimesnion for Sadana
            </p>

            <label className="next" htmlFor="checkbox-page1">
              <FaChevronRight></FaChevronRight>
            </label>
          </div>
          <div className="backpage">
            <img src="img/ashram/bojanasala2.jpeg" />

            <label className="prev" htmlFor="checkbox-page1">
              <FaChevronLeft></FaChevronLeft>
            </label>
          </div>
        </div>
        <div className="page" id="page2">
          <div className="frontpage flex-center">
            <p className="page-text">
              When ever I enter the ashram I feel as if some jammer has been put
              on the mind.
            </p>
            <label className="next" htmlFor="checkbox-page2">
              <FaChevronRight></FaChevronRight>
            </label>
          </div>
          <div className="backpage">
            <img src="img/ashram/gurustan.jpeg" />
            <label className="prev" htmlFor="checkbox-page2">
              <FaChevronLeft></FaChevronLeft>
            </label>
          </div>
        </div>
        <div className="page" id="page3">
          <div className="frontpage flex-center">
            <p className="page-text">It is a different world altogether.</p>
            <label className="next" htmlFor="checkbox-page3">
              <FaChevronRight></FaChevronRight>
            </label>
          </div>
          <div className="backpage">
            <img src="img/ashram/gurustan.jpeg" />
            <label className="prev" htmlFor="checkbox-page3">
              <FaChevronLeft></FaChevronLeft>
            </label>
          </div>
        </div>

        <div className="page" id="page4">
          <div className="frontpage flex-center">
            <p className="page-text">
              I forget all worries and tensions and feel peaceful in teh ashram
              and it stays with me for the whole week
            </p>
            <label className="next" htmlFor="checkbox-page4">
              <FaChevronRight></FaChevronRight>
            </label>
          </div>
          <div className="backpage">
            <img src="img/ashram/gurustan.jpeg" />
            <label className="prev" htmlFor="checkbox-page4">
              <FaChevronLeft></FaChevronLeft>
            </label>
          </div>
        </div>
        <div className="page" id="page5">
          <div className="frontpage flex-center">
            <p className="page-text">Thats few of the expereinces!!!</p>
            <label className="next" htmlFor="checkbox-page5">
              <FaChevronRight></FaChevronRight>
            </label>
          </div>
        </div>
        <div className="back-cover"></div>
      </div>
    </section>
  );
}
export default Flipbook;
