import React, { useState } from "react";
import "./Flipbook.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Flipbook() {
  const [currentPage, setCurrentPage] = useState(0); // 0 = cover, 1-5 = pages
  const [flippedPages, setFlippedPages] = useState(new Set());
  const [flippingBackPages, setFlippingBackPages] = useState(new Set()); // Track pages flipping backward

  const totalPages = 5;

  const handleNext = () => {
    // Clear any flipping-back states since we're going forward
    setFlippingBackPages(new Set());

    if (currentPage === 0) {
      // From cover to page 1
      setCurrentPage(1);
      setFlippedPages((prev) => new Set([...prev, "cover"]));
    } else if (currentPage < totalPages) {
      // Move to next page
      setCurrentPage(currentPage + 1);
      setFlippedPages((prev) => new Set([...prev, currentPage]));
    } else if (currentPage === totalPages) {
      // Reset from last page to beginning
      setCurrentPage(0);
      setFlippedPages(new Set());
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      const newFlipped = new Set(flippedPages);
      const newFlippingBack = new Set(flippingBackPages);

      if (currentPage === 1) {
        // Going back to cover
        newFlipped.delete("cover");
        newFlippingBack.add("cover"); // Mark cover as flipping back
        setCurrentPage(0);
        setFlippedPages(newFlipped);
        setFlippingBackPages(newFlippingBack);

        // Remove flipping-back class after animation completes
        setTimeout(() => {
          setFlippingBackPages((prev) => {
            const updated = new Set(prev);
            updated.delete("cover");
            return updated;
          });
        }, 1500);
      } else {
        // Going back to previous page
        const pageToFlipBack = currentPage - 1;
        newFlipped.delete(pageToFlipBack);
        newFlippingBack.add(pageToFlipBack); // Mark page as flipping back
        setCurrentPage(currentPage - 1);
        setFlippedPages(newFlipped);
        setFlippingBackPages(newFlippingBack);

        // Remove flipping-back class after animation completes
        setTimeout(() => {
          setFlippingBackPages((prev) => {
            const updated = new Set(prev);
            updated.delete(pageToFlipBack);
            return updated;
          });
        }, 1500);
      }
    }
  };

  const getPageClassName = (pageId) => {
    let baseClass = "page";
    if (flippedPages.has(pageId)) {
      baseClass += " flipped";
    }
    if (flippingBackPages.has(pageId)) {
      baseClass += " flipping-back";
    }
    return baseClass;
  };

  const getCoverClassName = () => {
    let baseClass = "cover";
    if (flippedPages.has("cover")) {
      baseClass += " flipped";
    }
    if (flippingBackPages.has("cover")) {
      baseClass += " flipping-back";
    }
    return baseClass;
  };

  // Calculate z-index for pages based on their state
  const getPageZIndex = (pageId) => {
    if (flippedPages.has(pageId)) {
      // Flipped pages should stack from lowest to highest on the left
      // Later pages get higher z-index so they're on top
      return 10 + pageId;
    } else {
      // Unflipped pages stack from lowest to highest on the right
      return 6 - pageId; // Original stacking order
    }
  };

  const getCoverZIndex = () => {
    // Cover should always be at the bottom when flipped
    // And higher than all pages when not flipped (to be visible on top initially)
    return flippedPages.has("cover") ? 1 : 10; // Higher z-index when not flipped
  };

  return (
    <section className="container book-container d-flex align-items-center justify-content-center">
      <div className={`book ${currentPage > 0 ? "opened" : ""}`}>
        <div
          className={getCoverClassName()}
          style={{ zIndex: getCoverZIndex() }}
        >
          <div className="frontpage cover-page">
            <div className="text-section">
              <h2 className="booktitle">ASRAMAM EXPERIENCES</h2>
            </div>
            <div className="image-section">
              <img src="img/ashram/Hall2.jpeg" alt="Ashram Hall" />
            </div>
            {currentPage === 0 && (
              <div className="navigation-overlay" onClick={handleNext}>
                <FaChevronRight className="cover-next-icon" />
              </div>
            )}
          </div>
          <div className="backpage"></div>
        </div>

        <div
          className={getPageClassName(1)}
          id="page1"
          style={{ zIndex: getPageZIndex(1) }}
        >
          <div className="frontpage flex-center">
            <p className="book-heading">
              ASHRAM
              <br /> A Separate Dimension for Sadhana
            </p>
            {currentPage === 1 && (
              <>
                <button className="nav-btn next" onClick={handleNext}>
                  <FaChevronRight />
                </button>
                <button className="nav-btn prev" onClick={handlePrev}>
                  <FaChevronLeft />
                </button>
              </>
            )}
          </div>
          <div className="backpage">
            <img src="img/ashram/bojanasala2.jpeg" alt="Bojanasala" />
          </div>
        </div>

        <div
          className={getPageClassName(2)}
          id="page2"
          style={{ zIndex: getPageZIndex(2) }}
        >
          <div className="frontpage flex-center">
            <p className="page-text">
              Whenever I enter the ashram I feel as if some jammer has been put
              on the mind.
            </p>
            {currentPage === 2 && (
              <>
                <button className="nav-btn next" onClick={handleNext}>
                  <FaChevronRight />
                </button>
                <button className="nav-btn prev" onClick={handlePrev}>
                  <FaChevronLeft />
                </button>
              </>
            )}
          </div>
          <div className="backpage">
            <img src="img/ashram/gurustan.jpeg" alt="Gurustan" />
          </div>
        </div>

        <div
          className={getPageClassName(3)}
          id="page3"
          style={{ zIndex: getPageZIndex(3) }}
        >
          <div className="frontpage flex-center">
            <p className="page-text">It is a different world altogether.</p>
            {currentPage === 3 && (
              <>
                <button className="nav-btn next" onClick={handleNext}>
                  <FaChevronRight />
                </button>
                <button className="nav-btn prev" onClick={handlePrev}>
                  <FaChevronLeft />
                </button>
              </>
            )}
          </div>
          <div className="backpage">
            <img src="img/ashram/gurustan.jpeg" alt="Gurustan" />
          </div>
        </div>

        <div
          className={getPageClassName(4)}
          id="page4"
          style={{ zIndex: getPageZIndex(4) }}
        >
          <div className="frontpage flex-center">
            <p className="page-text">
              I forget all worries and tensions and feel peaceful in the ashram
              and it stays with me for the whole week.
            </p>
            {currentPage === 4 && (
              <>
                <button className="nav-btn next" onClick={handleNext}>
                  <FaChevronRight />
                </button>
                <button className="nav-btn prev" onClick={handlePrev}>
                  <FaChevronLeft />
                </button>
              </>
            )}
          </div>
          <div className="backpage">
            <img src="img/ashram/gurustan.jpeg" alt="Gurustan" />
          </div>
        </div>

        <div
          className={getPageClassName(5)}
          id="page5"
          style={{ zIndex: getPageZIndex(5) }}
        >
          <div className="frontpage flex-center">
            <p className="page-text">Those are a few of the experiences!!!</p>
            {currentPage === 5 && (
              <>
                <button
                  className="nav-btn next reset"
                  onClick={handleNext}
                  title="Back to beginning"
                >
                  <FaChevronRight />
                </button>
                <button className="nav-btn prev" onClick={handlePrev}>
                  <FaChevronLeft />
                </button>
              </>
            )}
          </div>
        </div>

        <div className="back-cover"></div>
      </div>
    </section>
  );
}

export default Flipbook;
